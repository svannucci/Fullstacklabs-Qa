import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { colors } from '../../constants/colors';

export const PageContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
  maxWidth: '820px',
  margin: '0 auto',
}));

export const BattleSection = styled.section(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
  flexDirection: 'column',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
}));

export const StartBattleButton = styled(Button)(({ disabled }) => ({
  background: disabled ? colors.lightGreen : colors.darkGreen,
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  color: `${colors.white} !important`,
  padding: '12px 30px',
  textTransform: 'capitalize',
  '&:hover': {
    background: colors.darkGreenHover,
  },
}));
