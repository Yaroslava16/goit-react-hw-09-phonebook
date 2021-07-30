// import { useState } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
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

// export default function RegisterView() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div>
//       <h1>Registration page</h1>

//       <form autoComplete="off" onSubmit={handleSubmit} style={styles.form}>
//         <label style={styles.label}>
//           Name
//           <input
//             autoComplete="off"
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//           />
//         </label>

//         <label style={styles.label}>
//           Email
//           <input
//             autoComplete="off"
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label style={styles.label}>
//           Password
//           <input
//             autoComplete="off"
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Register now</button>
//       </form>
//     </div>
//   );
// }

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <div>
          <h1>Registration page</h1>

          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            style={styles.form}
          >
            <label style={styles.label}>
              Name
              <input
                autoComplete="off"
                type="text"
                name="name"
                value={name}
                // eslint-disable-next-line no-undef
                onChange={this.handleChange}
              />
            </label>

            <label style={styles.label}>
              Email
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={email}
                // eslint-disable-next-line no-undef
                onChange={this.handleChange}
              />
            </label>

            <label style={styles.label}>
              Password
              <input
                autoComplete="off"
                type="password"
                name="password"
                value={password}
                // eslint-disable-next-line no-undef
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Register now</button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
