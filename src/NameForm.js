import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valueTextArea: 'Please write your essay for your ReactDOM',
    };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);

     this.handleChangeTA = this.handleChangeTA.bind(this);
    //  this.handleSubmitTA = this.handleSubmitTA.bind(this);
   }

   handleChange(event) {
     this.setState({
       value: event.target.value,
      //  valueTextArea: event.target.valueTextArea
     });
   }

   handleSubmit(event) {
     alert("Input value is: " + this.state.value);
     alert("An essay was given: " + this.state.valueTextArea);
     event.preventDefault();
   }

   handleChangeTA(event) {
     this.setState({valueTextArea: event.target.value});
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Essay: <textarea value={this.state.valueTextArea} cols="40"
            onChange={this.handleChangeTA} />
        </label>
        <br />
        <input type="submit" value="Submit" />
       </form>
     );
   }
}

export default NameForm;
