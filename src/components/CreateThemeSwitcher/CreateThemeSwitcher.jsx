import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './CreateNoteSwitcher.module.css';

export class CreateThemeSwitcher extends Component {
  static propTypes = {
    handleToggleTheme: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <span className={style.noteWrapper}>Night:</span>
        <label className={style.switch}>
          <input type="checkbox" onChange={this.props.handleToggleTheme} />
          <span className={style.slider}></span>
        </label>
        <span className={style.noteWrapper}>Day</span>
      </div>
    );
  }
}

// export default CreateThemeSwitcher;
