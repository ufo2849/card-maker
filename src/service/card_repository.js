import firebaseApp from './firebase';

class CardRepository {
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }

    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }

    syncCard(userId, onUpdate) {
        const CountRef= firebaseApp.database().ref(`${userId}/cards`);
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