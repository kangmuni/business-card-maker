import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header authService={authService} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor></Editor>
        <Preview></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
