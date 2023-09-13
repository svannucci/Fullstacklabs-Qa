import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'block',
  flexDirection: 'column',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
  '@media (max-width: 768px)': {
    color: colors.darkGreen,
  },
}));

export const BattleMonsterImage = styled.img(() => ({
  width: '283px',
  height: '178px',
  filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
  borderRadius: '7px',
}));

export const ProgressBar = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'customWidth',
})<{ customWidth?: string }>(({ customWidth }) => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
  width: `${customWidth}`,
  '@media (max-width: 768px)': {
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: colors.darkGreen,
    },
  },
}));

export const BattleMonsterName = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '26px',
  color: colors.black,
  padding: '7px 0',
  textAlign: 'left',
}));

export const BattleMonsterHorizontalRule = styled.hr(() => ({
  width: '270px',
  height: '0px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  marginTop: '-4px',
}));
