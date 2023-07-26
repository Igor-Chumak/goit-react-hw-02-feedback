import { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Title, StatisticsBox, StatisticItem } from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
  };

  render() {
    const { state, title } = this.props;
    console.log('state: ', state);
    return (
      <>
        <Title>{title}</Title>
        <StatisticsBox>
          {Object.keys(state).map(stateId => (
            <StatisticItem key={stateId}>
              {stateId} : {state[stateId]}
            </StatisticItem>
          ))}
        </StatisticsBox>
      </>
    );
  }
}

// if (typeOf state[i] === 'number')
