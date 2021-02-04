import React from 'react';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Contact from '../Contact';

const ContactList = () => {
  const filterContacts = (contacts, filter) => {
    if (filter.length === 0) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  };
  const contacts = useSelector(state =>
    filterContacts(state.contacts, state.filter),
  );
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
