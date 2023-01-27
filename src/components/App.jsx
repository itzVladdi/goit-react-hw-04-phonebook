import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function handleFilter(event) {
    const { value } = event.target;
    setFilter(value);
  }
  function handleSubmit(newContact) {
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    setContacts(prevState => [...prevState, newContact]);
  }
  function handleFilterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  function deleteUser(userId) {
    setContacts(prevState => prevState.filter(({ id }) => id !== userId));
  }
  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(prevState => [
        ...prevState,
        ...JSON.parse(localStorage.getItem('contacts')),
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
        Phonebook
      </h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} handleFilter={handleFilter} />
          <ContactList>
            <ContactItem
              filterContacts={handleFilterContacts()}
              deleteUser={deleteUser}
            />
          </ContactList>
        </>
      ) : (
        <p style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
          You don't have contacts yet!
        </p>
      )}
    </>
  );
}
