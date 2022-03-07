import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

const database = getDatabase();

class CardRepository {
  syncCards(userId, onUpdate) {
    const cardRef = ref(database, `${userId}/cards`);
    onValue(cardRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    set(ref(database, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    const cardRef = set(ref(database, `${userId}/cards/${card.id}`));
    remove(cardRef);
  }
}

export default CardRepository;
