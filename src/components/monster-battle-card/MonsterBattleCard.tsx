import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterBattleProgressBar } from '../monster-battle-progress-bar/MonsterBattleProgressBar';
import {
  BattleMonsterCard,
  BattleMonsterHorizontalRule,
  BattleMonsterImage,
  BattleMonsterName,
  BattleMonsterTitle,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  if (monster) {
    return (
      <BattleMonsterCard>
        <BattleMonsterImage src={monster?.imageUrl}></BattleMonsterImage>
        <BattleMonsterName>{monster?.name}</BattleMonsterName>
        <BattleMonsterHorizontalRule></BattleMonsterHorizontalRule>
        <MonsterBattleProgressBar title='HP' percent={monster?.hp}></MonsterBattleProgressBar>
        <MonsterBattleProgressBar title='Attack' percent={0}></MonsterBattleProgressBar>
        <MonsterBattleProgressBar title='Deffense' percent={monster?.defense}></MonsterBattleProgressBar>
        <MonsterBattleProgressBar title='Speed' percent={monster?.speed}></MonsterBattleProgressBar>
      </BattleMonsterCard>
    );
  } else {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      </BattleMonsterCard>
    );
  }
};

export { MonsterBattleCard };
