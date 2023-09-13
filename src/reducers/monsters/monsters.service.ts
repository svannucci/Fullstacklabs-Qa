import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getAll = async (): Promise<Monster[]> => {
  await delay(3000); // 3000 milliseconds (3 seconds)

  const response = await fetch(`${API_URL}/monsters`);
  const data = await response.json();
  return data;
};

const battle = async (players: Players): Promise<Battle> => {
  try {
    const response = await fetch(`${API_URL}/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monster1Id: players.monster1Id,
        monster2Id: players.monster2Id,
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('Network response was not ok');
    }

    const data: Battle = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const MonsterService = {
  getAll,
  battle,
};
