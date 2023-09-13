import { MonsterService } from './monsters.service';
import monstersData from '../../../data/monsters.json';
import { Battle } from '../../models/interfaces/battle.interface';
import { API_URL } from '../../constants/env';

describe('Monsters Service', () => {
  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });

  it('should get the winner of the battle of monsters', async () => {
    const mockPlayers = {
      monster1Id: '1',
      monster2Id: '2',
    };

    const mockBattleResponse = {
      winner: 'Monster 2',
      tie: true,
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockBattleResponse),
    });

    const battleResult = await MonsterService.battle(mockPlayers);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockPlayers),
    });

    expect(battleResult).toEqual(mockBattleResponse);
  });
});
