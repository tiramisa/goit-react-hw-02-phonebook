import React from 'react';

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li>
      {name}: {phone} <button onClick={() => onRemove(id)}>Kill</button>
    </li>
  );
};

export const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};
