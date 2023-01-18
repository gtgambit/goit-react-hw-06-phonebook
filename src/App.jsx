import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
//model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
