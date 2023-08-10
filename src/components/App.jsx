import { Component } from "react";
  
import ContactForm from "components/contactList/ContactList";
  
export default class App extends Component{
  state={
  contacts:[],
  }

  handleAddContact = (newContact) =>
    this.setState(({ contacts }) => ({
    contacts:[...contacts,newContact]
    }))
  handleGetUniqueContacts = (name) => {
    const {contacts} = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name)
    isExistContact && alert('Контакт уже существует')
    return !isExistContact
     }
  render() {
    return <>
      <h2>Form Contact</h2>
      <ContactForm onAdd={this.handleAddContact } />
    </>
  }
}
