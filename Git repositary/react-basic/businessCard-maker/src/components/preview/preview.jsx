import React, { useState } from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';

const Preview = ({ FileInput, cards, updateCard, deleteCard }) => {
  const [cardEditForm, setCardEditForm] = useState(false);

  const editCard = (event) => {
    setCardEditForm(true);
  };

  const doneCard = (event) => {
    setCardEditForm(false);
  };

  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        {Object.keys(cards).map((key) => (
          <>
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
          </>
        ))}
      </div>
    </section>
  );
};

export default Preview;
