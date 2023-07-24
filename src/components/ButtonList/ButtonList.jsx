import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './ButtonList.styled';

export class ButtonList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    typeFeedbacks: PropTypes.arrayOf(
      PropTypes.shape({
        button: PropTypes.string.isRequired,
        btnColor: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
      </div>
    );
  }
}
