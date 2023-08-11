import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import { ContactsList } from "./contactsList/ContactsList";
import Filter from "./filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (newContact) => {
    if (this.handleGetUniqueContacts(newContact.name)) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    }
  };

  handleRemoveContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleGetUniqueContacts = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contact) => contact.name === name);

    if (isExistContact) {
      alert("Контакт уже существует");
    }

    return !isExistContact;
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h2>Form Contact</h2>
        <ContactForm onAdd={this.handleAddContact} getUniqueContacts={this.handleGetUniqueContacts} />
        <h2>Contact List</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactsList contacts={visibleContacts} onRemove={this.handleRemoveContact} />
      </>
    );
  }
}




