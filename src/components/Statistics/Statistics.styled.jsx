import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacing(7)};
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.1em;
`;

export const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};
`;

export const StatisticItem = styled.div`
  color: inherit;
  font-weight: normal;
  font-size: 20px;
  text-transform: capitalize;
`;

export const StatisticItemTotal = styled(StatisticItem)`
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
`;

export const StatisticItemPositive = styled(StatisticItem)`
  color: green;
`;
