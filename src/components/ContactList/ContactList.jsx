import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/Contacts/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      {contacts.length ? (
        <div className={css.contactList}>
          <ul className={css.ul}>
            {filteredContacts.map(({ name, id, number }) => (
              <li key={id}>
                {name}:{number}
                <button onClick={() => handleDelete(id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results...</p>
      )}
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contactToRender: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};
