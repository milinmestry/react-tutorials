import React from 'react';


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil at {props.celsius} celsius.</p>;
  } else {
    return <p>The water would not boil at {props.celsius} celsius.</p>;
  }
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temprature: ''};

    this.handleChange =this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({temprature: event.target.value});
  }

  render() {
    const temprature = this.state.temprature;
    return (
      <fieldset>
        <legend>Enter temprature in celsius:</legend>
        <input maxLength="7" value={temprature} onChange={this.handleChange} />
        {temprature > 0
          ? <BoilingVerdict celsius={parseFloat(temprature)} />
        : "Waiting for user input."
        }
      </fieldset>
    );
  }
}

export default Calculator;