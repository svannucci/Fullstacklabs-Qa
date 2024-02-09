import { ProgressBar } from '../monster-battle-card/MonsterBattleCard.styled';

type MonsterBattleProgressBarProps = {
  title?: string;
  percent?: number;
};

const progressBar = {
    fontFamily: 'Montserrat',
    margin: '5px 0',
    fontWeight: '400',  
    fontSize: '12px',
    lineHeight: '14px',
    marginLeft: '12px',
}

const labelProgressBar = {
    marginTop: '11px',
    marginBottom: '5px',
    display: 'block'
}

const MonsterBattleProgressBar: React.FC<MonsterBattleProgressBarProps> = ({
  title,
  percent,
}) => {
  return (
    <div style={progressBar}>
      <label style={labelProgressBar}>{title}</label>
      <ProgressBar
        value={percent}
        variant="determinate"
        customWidth="280px"></ProgressBar>
    </div>
  );
};

export { MonsterBattleProgressBar };
