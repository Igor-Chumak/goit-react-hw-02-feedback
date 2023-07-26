import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components';

export class Header extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    const { children } = this.props;
    return (
      <header>
        <Container>{children}</Container>
      </header>
    );
  }
}
