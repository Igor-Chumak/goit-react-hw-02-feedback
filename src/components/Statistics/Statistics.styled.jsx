import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(7)};
  padding-right: ${props => props.theme.spacing(7)};
`;

export const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.theme.spacing(7)};
`;

export const StatisticItem = styled.div`
  color: inherit;
  font-weight: normal;
  font-size: 20px;
  text-transform: capitalize;
  padding: 5px;
`;
