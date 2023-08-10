  import { Component } from "react";
  import { nanoid } from 'nanoid'

const INIIAL_STATE = {
  phone: '',
    name: '',}
  
  class ContactForm extends Component {
  state = INIIAL_STATE
  handleChangeForm = ({ target }) => {
      const { name, value } = target
      this.setState({ [name]: value })
    }
  handleFormsubmit = (e) => {
      e.preventDefault()
      const { name, phone } = this.state;
      const { onAdd } = this.props;

      const isValidatedForm = this.validateForm()
      if (!isValidatedForm) return
    onAdd({ id: nanoid(), name, phone });

  }
    
  validateForm = () => {
      const { name, phone } = this.state;
      const { getUniqueContacts } = this.props;
      if (!name || !phone) {
        alert('Необходимо заполнить пустые поля!')
        return false
      } 
      return getUniqueContacts(name)
}
    resetForm = () => this.setState(INIIAL_STATE)
  
  render() { 
    const{name,phone}=this.state
    return (
      <form action="">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          pattern="\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}"
          title="Please enter a valid phone number in the format +X (XXX) XXX-XXXX"
          value={phone}
          onChange
        />

        <button
          type="submit">
          Add Contact
        </button>
      </form>
    )
  }
}
  export default ContactForm;