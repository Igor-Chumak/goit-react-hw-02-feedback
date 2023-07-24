import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './CreateNoteSwitcher.module.css';

export class CreateThemeSwitcher extends Component {
  static propTypes = {
    handleToggleTheme: PropTypes.func.isRequired,
    isNightTheme: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className={style.switchBox}>
        <span className={style.noteWrapper}>Night</span>
        <label className={style.switch}>
          <input
            type="checkbox"
            onChange={this.props.handleToggleTheme}
            checked={!this.props.isNightTheme}
          />
          <span className={style.slider}></span>
        </label>
        <span className={style.noteWrapper}>Day</span>
      </div>
    );
  }
}
