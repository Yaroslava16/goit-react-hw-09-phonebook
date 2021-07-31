import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn('Wrong data');
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, email, name, password],
  );

  return (
    <div>
      <h1>Registration page</h1>

      <form autoComplete="off" onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register now</button>
      </form>
    </div>
  );
}
