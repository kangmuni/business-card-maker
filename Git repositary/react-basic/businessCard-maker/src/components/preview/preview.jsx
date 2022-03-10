import React, { useState } from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';

const Preview = ({ FileInput, cards, updateCard, deleteCard }) => {
  const [cardEditForm, setCardEditForm] = useState();

  const editCard = (event) => {
    event.preventDefault();
    setCardEditForm(true);
  };

  const doneCard = (event) => {
    event.preventDefault();
    setCardEditForm(false);
  };

  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        {Object.keys(cards).map((key) => (
          <ul key={key} className={styles.cards}>
            {cardEditForm ? (
              <CardEditForm
                key={key}
                FileInput={FileInput}
                card={cards[key]}
                doneCard={doneCard}
                updateCard={updateCard}
              />
            ) : (
              <Card
                key={key}
                card={cards[key]}
                editCard={editCard}
                deleteCard={deleteCard}
              />
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Preview;
