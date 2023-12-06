import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Access the user information using userCredential.user
      console.log('User signed up successfully:', userCredential.user);
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form style={styles.form} onSubmit={handleSignUp}>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button style={styles.button} type="submit">
          Sign Up
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      <p style={styles.signInLink}>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
  },
  error: {
    color: '#FF6347',
    marginTop: '10px',
  },
  signInLink: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  },
};

export default SignUp;
