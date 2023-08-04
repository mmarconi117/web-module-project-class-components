import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    this.setState({ input: '' }); // Reset the input field after adding the todo
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
