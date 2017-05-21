import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <div>
        <code>{this.props.date.toLocaleTimeString()}</code>
      </div>
    );
  }
}

export default Clock;
