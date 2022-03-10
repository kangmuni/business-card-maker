import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
  constructor(app) {
    this.database = getDatabase(app);
  }
  syncCards(userId, onUpdate) {
    const syncRef = ref(this.database, `${userId}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(syncRef);
  }

  saveCard(userId, card) {
    set(ref(this.database, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.database, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
