import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components';
import { Title, SectionBox } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
  };

  render() {
    const { title, children } = this.props;
    return (
      <SectionBox>
        <Container>
          <Title>{title}</Title>
          {children}
        </Container>
      </SectionBox>
    );
  }
}
