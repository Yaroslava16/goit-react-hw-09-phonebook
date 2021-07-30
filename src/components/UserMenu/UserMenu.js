import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, getUsername } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getUsername);
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   name: getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };
