import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/fetchBattleWins',
  MonsterService.battle,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setRandomMonster = createAction<Monster | null>(
  'monsters/setRandomMonster',
);

export const setWinner = createAction<Battle | null>(
  'monsters/setWinner',
);