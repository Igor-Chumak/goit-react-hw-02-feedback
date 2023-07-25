import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Section,
  CreateThemeSwitcher,
  ButtonList,
} from 'components';
import typeFeedbacks from 'data/type_feedback.json';

// console.log(typeFeedbacks);
const stateDefault = {};
typeFeedbacks.map(({ nameId, value }) => (stateDefault[nameId] = value));
// console.log('shape: ', shape);

export class App extends Component {
  static propTypes = { isNightTheme: PropTypes.bool.isRequired };

  state = {
    ...stateDefault,
    // good: 0,
    // neutral: 0,
    // bad: 0,
    isNightTheme: this.props.isNightTheme,
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
              <ButtonList
                title="Please leave feedback"
                typeFeedbacks={typeFeedbacks}
              />
            </Container>
          </Section>
        </main>
      </>
    );
  }
}
