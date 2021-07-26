import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css';
import { Component } from 'react';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDelete } = this.props;

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
}

export default ContactsList;

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
