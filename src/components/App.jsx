import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import { ContactsList } from "./contactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <>
        <h2>Form Contact</h2>
        <ContactForm onAdd={this.handleAddContact} getUniqueContacts={this.handleGetUniqueContacts} />
        <ContactsList contacts={this.state.contacts} onRemove={this.handleRemoveContact} />
      </>
    );
  }
}


