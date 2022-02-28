import React, { useState } from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';

const Preview = ({ cards }) => {
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
        {cards.map((card) => (
          <>
            {cardEditForm ? (
              <CardEditForm card={card} doneCard={doneCard} />
            ) : (
              <Card card={card} editCard={editCard} />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Preview;
