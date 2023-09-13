import { createReducer } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchBattleWins,
  fetchMonstersData,
  setRandomMonster,
  setSelectedMonster,
  setWinner,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectRandomMonster: Monster | null;
  winner: Battle | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectRandomMonster: null,
  winner: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(fetchBattleWins.fulfilled, (state, action) => ({
    ...state,
    winner: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setRandomMonster, (state, action) => ({
    ...state,
    selectRandomMonster: action.payload,
  }));

  builder.addCase(setWinner, (state, action) => ({
    ...state,
    winner: action.payload,
  }));
});
