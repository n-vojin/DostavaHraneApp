import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

export const makeOrder = ({
  restaurantName,
  timeOfOrder,
  itemsInOrder,
  itemsPrice,
  deliveryFee,
  deliveryTime,
  totalPrice,
  userId,
  orderId,
}) => {
  const db = firebase.firestore();

  CURRENT_DOCUMENT_ID = '83qZDx2bcWUpWbO9lQfqh015Wox2';
  // Reference to the specific document
  const docRef = db.collection('user').doc(userId);

  // Retrieve the current orders array data
  docRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const currentOrders = doc.data().orders || [];

        // New arrays to be added
        const newItems = [
          {
            orderId: orderId,
            restaurantName: restaurantName,
            timeOfOrder: timeOfOrder,
            itemsInOrder: itemsInOrder,
            itemsPrice: itemsPrice,
            deliveryFee: deliveryFee,
            deliveryTime: deliveryTime,
            totalPrice: totalPrice,
          },
        ];

        // Append new arrays to the existing orders array
        const updatedOrders = [...currentOrders, ...newItems];

        // Update the document with the updated orders array
        docRef
          .update({
            orders: updatedOrders,
          })
          .then(() => {
            console.log(
              'Document successfully updated with additional arrays!',
            );
          })
          .catch(error => {
            console.error('Error updating document: ', error);
          });
      } else {
        console.log('Document not found');
      }
    })
    .catch(error => {
      console.error('Error getting document: ', error);
    });
};
