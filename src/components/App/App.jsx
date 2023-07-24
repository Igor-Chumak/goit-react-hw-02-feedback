import { Component } from 'react';
import { Container, Section, CreateThemeSwitcher } from 'components';
import typeFeedbacks from 'data/type_feedback.json';

console.log(typeFeedbacks);
const shape = {};
typeFeedbacks.map(({ name, value }) => (shape[name] = value));
console.log('shape: ', shape);

export class App extends Component {
  state = {
    ...shape,
    // good: 0,
    // neutral: 0,
    // bad: 0,
    isNightTheme: false,
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return { isNightTheme: !prevState.isNightTheme };
    });
  };

  render() {
    return (
      <>
        <header>
          <Container>
            <CreateThemeSwitcher
              handleToggleTheme={this.handleToggleTheme}
              isNightTheme={this.state.isNightTheme}
            />
          </Container>
        </header>
        <main>
          <Section>
            <Container>
              <h2> Please leave feedback </h2>
            </Container>
          </Section>
        </main>
      </>
    );
  }
}
