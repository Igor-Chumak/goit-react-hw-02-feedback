import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBox, Button } from './ButtonList.styled';

export class ButtonList extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        nameId: PropTypes.string.isRequired,
        buttonName: PropTypes.string.isRequired,
        btnColor: PropTypes.string.isRequired,
      })
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <ButtonBox>
          {this.props.options.map(
            ({ nameId, buttonName, btnColor, btnBgColor }) => (
              <Button
                type="button"
                name={nameId}
                style={{ color: btnColor, backgroundColor: btnBgColor }}
                key={nameId}
                onClick={this.props.onLeaveFeedback}
              >
                {buttonName}
              </Button>
            )
          )}
        </ButtonBox>
      </div>
    );
  }
}
