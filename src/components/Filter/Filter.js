import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { filter } from '../../redux/phonebook';
import { getFilter } from '../../redux/phonebook';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);
  const onChange = useCallback(
    e => dispatch(filter(e.target.value)),
    [dispatch],
  );

  return (
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
}
