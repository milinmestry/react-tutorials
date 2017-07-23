import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const target = event.target;
    const value = (target.type === 'checked') ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is Going: <input name="isGoing" type="checkbox"
          checked={this.state.isGoing} onChange={this.handleChangeInput} />
        </label>
        <br />
        <label>
          Number of Guests: <input name="numberOfGuests" type="number"
          checked={this.state.numberOfGuests} onChange={this.handleChangeInput} />
        </label>
      </form>
    )
  }
}

export default Reservation;
