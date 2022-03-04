import { getDatabase, ref, set, remove } from 'firebase/database';

const database = getDatabase();

class CardRepository {
  saveCard(userId, card) {
    set(ref(database, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    const cardRef = set(ref(database, `${userId}/cards/${card.id}`));
    remove(cardRef);
  }
}

export default CardRepository;
