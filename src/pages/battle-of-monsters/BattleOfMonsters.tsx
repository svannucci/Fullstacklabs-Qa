import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import {
  fetchBattleWins,
  fetchMonstersData,
} from '../../reducers/monsters/monsters.actions';
import {
  monsterWins,
  selectMonsters,
  selectRandomMonster,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { Players } from '../../models/interfaces/battle.interface';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();
  const monsters = useSelector(selectMonsters);
  const battleWins = useSelector(monsterWins);
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedRandomMonster = useSelector(selectRandomMonster);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    let players: Players = {};
    players.monster1Id = selectedMonster?.id;
    players.monster2Id = selectedRandomMonster?.id;
    dispatch(fetchBattleWins(players));
  };

  return (
    <PageContainer>
      <Title>Battle of Monters</Title>
      <MonstersList monsters={monsters} />
      {battleWins && (
        <WinnerDisplay text={battleWins?.winner.name} />
      )}
      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster == null}
          onClick={handleStartBattleClick}>
          Start Batle
        </StartBattleButton>
        <MonsterBattleCard
          title="Computer"
          monster={selectedRandomMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
