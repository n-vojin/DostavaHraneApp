import firestore from '@react-native-firebase/firestore';

export async function deleteOrder(userId, orderIdToDelete) {
  const userRef = firestore().collection('user').doc(userId);

  try {
    const docSnapshot = await userRef.get();

    if (docSnapshot.exists) {
      const userData = docSnapshot.data();
      const ordersArray = userData.orders || [];

      const updatedOrdersArray = ordersArray.filter(
        order => order.orderId !== orderIdToDelete,
      );

      await userRef.update({orders: updatedOrdersArray});

      console.log(`Order with orderId ${orderIdToDelete} has been deleted.`);
    } else {
      console.log('User document does not exist.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function with the user ID and order ID to delete
