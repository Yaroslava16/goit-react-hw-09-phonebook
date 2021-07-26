import ContactListContainer from '../components/Contacts/ContactList.container';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import styles from '../components/App.module.css';

const ContactsView = () => {
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form />
      <h2 className={styles.secondTitle}>Contacts</h2>
      <Filter />
      <ContactListContainer />
    </div>
  );
};

export default ContactsView;
