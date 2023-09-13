import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;
export const monsterWins = (state: RootState) => state.monsters.winner;
export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;
export const randomMonsters = (state: RootState) => state.monsters.monsters;
export const selectRandomMonster = (state: RootState) =>
  state.monsters.selectRandomMonster;
