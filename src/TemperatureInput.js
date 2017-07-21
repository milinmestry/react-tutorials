import React from 'react';

const scaleNames = {
  'c': 'Celsius',
  'f': 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {temperature: ''};

    this.handleChange =this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState({temperature: event.target.value});
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input maxLength="7" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }

}

export default TemperatureInput;