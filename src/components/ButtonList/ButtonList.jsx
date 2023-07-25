import { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Title, ButtonBox, Button } from './ButtonList.styled';

export class ButtonList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    typeFeedbacks: PropTypes.arrayOf(
      PropTypes.shape({
        nameId: PropTypes.string.isRequired,
        buttonName: PropTypes.string.isRequired,
        btnColor: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <ButtonBox>
          {this.props.typeFeedbacks.map(
            ({ nameId, buttonName, btnColor, btnBgColor }) => (
              <Button
                type="button"
                name={nameId}
                style={{ color: btnColor, backgroundColor: btnBgColor }}
                key={nameId}
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
