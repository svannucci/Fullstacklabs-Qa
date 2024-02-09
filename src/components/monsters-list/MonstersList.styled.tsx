import styled from '@emotion/styled';
import { Typography, Card } from '@mui/material';
import { colors } from '../../constants/colors';

export const ListTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '28.13px',
  color: colors.black,
  '@media (max-width: 768px)': {
    marginLeft: '30px',
    lineHeight: '28.13px',
    fontFamily: 'Montserrat',
  },
}));

export const MonsterCard = styled(Card)<{ selected?: boolean }>(
  ({ selected }) => ({
    background: colors.white,
    border: selected ? `2px solid ${colors.progressColor}` : 'none',
    boxShadow: '-2px 3px 50px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    padding: '7px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all .0.5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }),
);

export const Image = styled.img(() => ({
  borderRadius: '7px',
  width: '136px',
  height: '99px',
}));

export const MonsterName = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '18.75px',
  color: colors.black,
  padding: '7px 0',
  '@media (max-width: 768px)': {
    color: colors.lightBlue,
  },
}));

export const MonstersSection = styled.section(() => ({
  marginTop: '20px',
  display: 'flex',
  gap: '16px',
  flexDirection: 'row',
  alignItems: 'center',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
