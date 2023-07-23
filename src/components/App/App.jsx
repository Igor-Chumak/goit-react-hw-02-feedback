import { Component } from 'react';
import { Container, Section } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section>
        <Container>
          <h2> Please leave feedback </h2>
        </Container>
      </Section>
    );
  }
}
