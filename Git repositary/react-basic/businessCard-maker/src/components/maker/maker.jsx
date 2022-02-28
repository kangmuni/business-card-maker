import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      title: 'Software Engineer',
      name: '강무늬',
      theme: 'colorful',
      message: 'keep going',
      company: 'Naver',
      email: 'muni@google.com',
      fileName: 'muni.jpg',
    },
    2: {
      id: '2',
      title: 'Software Engineer',
      name: '강무늬',
      theme: 'light',
      message: 'keep going',
      company: 'Watcha',
      email: 'muni@google.com',
      fileName: 'muni.jpg',
    },
    3: {
      id: '3',
      title: 'Software Engineer',
      name: '강무늬',
      theme: 'dark',
      message: 'keep going',
      company: 'Nexflix',
      email: 'muni@google.com',
      fileName: 'muni.jpg',
    },
  });

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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const updateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header authService={authService} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}></Editor>
        <Preview
          cards={cards}
          updateCard={updateCard}
          deleteCard={deleteCard}
        ></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
