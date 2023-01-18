import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state =>
    state.contacts.items.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(state.filter.toLowerCase().trim())
    )
  );

  const dispatch = useDispatch();
  const deleteContact = id => {
    contacts.filter(contact => contact.id !== id);
  };
  return (
    <>
      {contacts.length ? (
        <div className={css.contactList}>
          <ul className={css.ul}>
            {contacts.map(({ name, id, number }) => (
              <li key={id}>
                {name}:{number}
                <button
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </button>
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
