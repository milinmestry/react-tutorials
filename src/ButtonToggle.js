import React from 'react';

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick =this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      Button state is {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }

}

export default ButtonToggle;
