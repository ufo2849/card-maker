import {firebaseDatabase} from './firebase';

class CardRepository {
    saveCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    }

    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }

    syncCard(userId, onUpdate) {
        const CountRef= firebaseDatabase.ref(`${userId}/cards`);
        CountRef.on('value', (snapshot) => {
            const value= snapshot.val();
            if (value) {
                onUpdate(value);
            }
        })
        return () => CountRef.off();
    }
}

export default CardRepository;