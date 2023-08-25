import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {makeOrder} from '../functions/db/makeOrder';

const ADMIN_SCREEN = () => {
  // Update the array field using arrayUnion

  const addMENU = () => {
    // Initialize Firebase (if not already initialized)
    const firebaseConfig = {
      // Your Firebase config
    };

    const db = firebase.firestore();

    // Reference to the specific document
    const docRef = db.collection('restaurant').doc(CURRENT_DOCUMENT_ID);

    // Data to add to the array
    const newItem = {
      image: 'new_image_url2',
      name: 'New Item Name2',
      price: 'New Item Price2',
    };

    docRef
      .update({
        menu: firebase.firestore.FieldValue.arrayUnion(newItem),
      })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch(error => {
        console.error('Error updating document: ', error);
      });
  };

  CURRENT_DOCUMENT_ID = 'wNg0DaVMaF1JyRnRqUo0';

  const addITEMS = () => {
    const db = firebase.firestore();

    // Reference to the specific document
    const docRef = db.collection('restaurant').doc(CURRENT_DOCUMENT_ID);

    // Retrieve the current menu array data
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const currentMenu = doc.data().menu || [];

          // New arrays to be added
          const newItems = [
            {
              image:
                'https://walter.rs/wp-content/uploads/2022/08/Walter-dorucak.png',
              name: 'WALTER BREAKFAST',
              price: 620,
            },
            {
              image:
                'https://walter.rs/wp-content/uploads/2022/06/VM25832-500x500.jpg',
              name: 'PLJESKAVICA',
              price: 630,
            },
            {
              image:
                'https://walter.rs/wp-content/uploads/2023/03/gurmanska-500x500.jpg',
              name: 'Gurmanska pljeskavica',
              price: 430,
            },
          ];

          // Append new arrays to the existing menu array
          const updatedMenu = [...currentMenu, ...newItems];

          // Update the document with the updated menu array
          docRef
            .update({
              menu: updatedMenu,
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

  return (
    <View>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 200,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={addMENU}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
          ADD MENU
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 200,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={addITEMS}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
          ADD MENU ITEMS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 200,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() =>
          makeOrder({
            restaurantName: 'restaurantName',
            timeOfOrder: 'timeOfOrder',
            itemsInOrder: 'itemsInOrder',
            itemsPrice: 'itemsPrice',
            deliveryFee: 'deliveryFee',
            deliveryTime: 'deliveryTime',
            totalPrice: 'totalPrice',
          })
        }>
        <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
          ADD ORDER ITEMS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ADMIN_SCREEN;

const styles = StyleSheet.create({});
