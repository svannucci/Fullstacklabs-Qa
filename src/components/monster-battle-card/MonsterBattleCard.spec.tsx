import { render } from '@testing-library/react';
import { MonsterBattleCard } from './MonsterBattleCard';
import monstersData from '../../../data/monsters.json';

describe('MonsterBattleCard', () => {

  it('renders the monster card correctly with a monster', () => {
    const { getByText, getByRole } =  render(<MonsterBattleCard monster={monstersData.monsters[0]} />);
    
    const monsterNameElement = getByText('Dead Unicorn');
    expect(monsterNameElement).toBeInTheDocument();

    const imgElement = getByRole('img');
    expect(imgElement.getAttribute('src')).toContain(monstersData.monsters[0].imageUrl);
  });

  it('renders the card with a title when no monster is provided', () => {
    const { getByText } = render(<MonsterBattleCard title="No Monster" />);
    
    const titleElement = getByText('No Monster');
    expect(titleElement).toBeInTheDocument();
  });
});
