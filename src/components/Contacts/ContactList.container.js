import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/phonebook';
import ContactsList from './ContactsList';
import { getVisibleContacts } from '../../redux/phonebook';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
