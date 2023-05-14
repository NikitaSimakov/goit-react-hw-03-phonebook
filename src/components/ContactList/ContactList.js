import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contactListRender, deleteContactHandler }) => {
  return (
    <ul>
      {contactListRender &&
        contactListRender.map(contact => (
          <li className={css.contactList_item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList_button}
              type="button"
              id={contact.id}
              onClick={deleteContactHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactListRender: PropTypes.array.isRequired,
  deleteContactHandler: PropTypes.func.isRequired,
};

export default ContactList;
