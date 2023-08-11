import React, { Component } from "react";
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  phone: '',
  name: '',
};

export default class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();
    if (isValidatedForm) {
      onAdd({ id: nanoid(), name, phone });
      this.resetForm();
    }
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { getUniqueContacts } = this.props;
    if (!name || !phone) {
      alert('Please fill in all fields!');
      return false;
    }
    return getUniqueContacts(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          // pattern="\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}"
          title="Please enter a valid phone number in the format +X (XXX) XXX-XXXX"
          value={phone}
          onChange={this.handleChangeForm}
        />

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
