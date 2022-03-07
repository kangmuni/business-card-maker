import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [cards, setCards] = useState({});

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.saveCard(userId, card);
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
