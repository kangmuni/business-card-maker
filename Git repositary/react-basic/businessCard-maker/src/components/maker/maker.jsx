import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'muni1',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'muni@google.com',
      message: 'keep going',
      fileName: 'muni.jpg',
    },
    // {
    //   id: '2',
    //   name: 'muni2',
    //   company: 'Samsung',
    //   theme: 'light',
    //   title: 'Software Engineer',
    //   email: 'muni@google.com',
    //   message: 'keep going',
    //   fileName: 'muni.jpg',
    // },
    // {
    //   id: '3',
    //   name: 'muni3',
    //   company: 'Samsung',
    //   theme: 'light',
    //   title: 'Software Engineer',
    //   email: 'muni@google.com',
    //   message: 'keep going',
    //   fileName: 'muni.jpg',
    // },
  ]);

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
  console.log(cards);

  return (
    <section className={styles.maker}>
      <Header authService={authService} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards}></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
