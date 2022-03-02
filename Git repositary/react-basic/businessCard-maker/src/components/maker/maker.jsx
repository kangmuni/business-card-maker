import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      title: 'Software Engineer',
      name: '강무늬',
      theme: 'colorful',
      message: 'keep going',
      company: 'Naver',
      email: 'muni@google.com',
      fileName: 'muni',
    },
    2: {
      id: '2',
      title: 'Software Engineer',
      name: '강무늬',
      theme: 'light',
      message: 'keep going',
      company: 'Watcha',
      email: 'muni@google.com',
      fileName: 'muni',
    },
    3: {
      id: '3',
      title: 'Software Engineer',
      name: '강무늬',
      theme: 'dark',
      message: 'keep going',
      company: 'Netflix',
      email: 'muni@google.com',
      fileName: 'muni',
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

  const createOrUpdateCard = (card) => {
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
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
        />
        <Preview
          FileInput={FileInput}
          cards={cards}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
