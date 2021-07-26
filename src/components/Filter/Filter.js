import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { filter } from '../../redux/phonebook';
import { getFilter } from '../../redux/phonebook';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   filterContacts: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
