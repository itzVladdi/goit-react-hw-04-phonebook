import { useState } from 'react';

import css from './ContactForm.module.css';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export function ContactForm({ handleSubmit }) {
  const [contact, setContact] = useState({ name: '', number: '' });
  const { name, number } = contact;

  function handleChange(event) {
    const { name, value } = event.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  }

  function handleAddContact(event) {
    event.preventDefault();
    handleSubmit({ ...contact, id: nanoid() });
    setContact({ name: '', number: '' });
  }

  return (
    <form className={css.form} onSubmit={handleAddContact}>
      <label htmlFor="Name">Name</label>
      <input
        id="Name"
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <label htmlFor="Number">Number</label>
      <input
        id="Number"
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
