import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      return;
    }

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />
        <input
          type="text"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
