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
    return (
      <div>
        <Title>{this.props.title}</Title>
        <StatisticsBox>
          <StatisticItem>
            {/* {this.props.state.map(({ nameId, button, btnColor, btnBgColor }) => (
            <StatisticItem
              style={{ color: btnColor, backgroundColor: btnBgColor }}
              key={nameId}
            >
              {button}
            </StatisticItem>
          ))} */}
          </StatisticItem>
        </StatisticsBox>
      </div>
    );
  }
}
