import { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import {
  Title,
  StatisticsBox,
  StatisticItem,
  StatisticItemTotal,
  StatisticItemPositive,
} from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { state, title, total, positivePercentage } = this.props;
    return (
      <>
        <Title>{title}</Title>
        <StatisticsBox>
          {Object.keys(state).map(
            stateKey =>
              typeof state[stateKey] === 'number' && (
                <StatisticItem key={stateKey}>
                  {stateKey} : {state[stateKey]}
                </StatisticItem>
              )
          )}
          <StatisticItemTotal>Total : {total}</StatisticItemTotal>
          <StatisticItemPositive>
            Positive feedback : {positivePercentage} %
          </StatisticItemPositive>
        </StatisticsBox>
      </>
    );
  }
}
