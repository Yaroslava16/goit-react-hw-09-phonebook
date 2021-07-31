// import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  getVisibleContacts,
  deleteContact,
} from '../../redux/phonebook';
import styles from '../Contacts/Contacts.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);
  const onDelete = useCallback(id => dispatch(deleteContact(id)), [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ name, id, number }) => (
          <li className={styles.itemContact} key={id}>
            <span>
              {name}: {number}
            </span>
            <button className={styles.btn} onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
