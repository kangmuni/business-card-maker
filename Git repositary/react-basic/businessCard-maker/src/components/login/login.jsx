import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate('/maker', { id: userId });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

  return (
    <section className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <button className={styles.button} onClick={onLogin}>
            Google
          </button>
        </li>
        <li className={styles.list}>
          <button className={styles.button} onClick={onLogin}>
            Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
