import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
// import PropTypes from 'prop-types';

import {
  Container,
  Section,
  CreateThemeSwitcher,
  ButtonList,
  Statistics,
} from 'components';
import typeFeedbacks from 'data/type_feedback.json';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';

// console.log(typeFeedbacks);
const stateDefault = {};
typeFeedbacks.map(({ nameId, value }) => (stateDefault[nameId] = value));
// console.log('stateDefault: ', stateDefault);

export class App extends Component {
  state = {
    ...stateDefault,
    // good: 0,
    // neutral: 0,
    // bad: 0,
    modeTheme: 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  render() {
    return (
      <ThemeProvider
        theme={{
          ...theme,
          ...(this.state.modeTheme === 'light' ? lightTheme : darkTheme),
        }}
      >
        <GlobalStyles />
        <header>
          <Container>
            <CreateThemeSwitcher
              handleToggleTheme={this.handleToggleTheme}
              modeTheme={this.state.modeTheme === 'light' ? false : true}
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
          <Section>
            <Container>
              <Statistics title="Statistics" state={this.state} />
            </Container>
          </Section>
        </main>
      </ThemeProvider>
    );
  }
}
