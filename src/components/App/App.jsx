import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ButtonList,
  Statistics,
} from 'components';
import typeFeedbacks from 'data/type_feedback.json';
// import typeFeedbacks from 'data/type_feedback_2.json';

// console.log(typeFeedbacks);
const stateDefault = {};
typeFeedbacks.map(({ nameId, value }) => (stateDefault[nameId] = value));
// console.log('stateDefault: ', stateDefault);

export class App extends Component {
  state = {
    ...stateDefault,
    modeTheme: 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  onLeaveFeedback = e => {
    console.log(e.currentTarget.name);
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((previousValue, element) => {
      return typeof this.state[element] === 'number'
        ? previousValue + this.state[element]
        : previousValue;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
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
        <Header>
          <CreateThemeSwitcher
            handleToggleTheme={this.handleToggleTheme}
            modeTheme={this.state.modeTheme === 'light' ? false : true}
          />
        </Header>
        <main>
          <Section title="Please leave feedback">
            <ButtonList
              options={typeFeedbacks}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </main>
      </ThemeProvider>
    );
  }
}
