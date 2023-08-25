import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import DeliveryCard from '../components/DeliveryCard';
import firestore from '@react-native-firebase/firestore';

const imaPorudzbina = true; //TODO Izmeniti dodati (DynamicData)

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MyOrderScreen({navigation}) {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const userId = '83qZDx2bcWUpWbO9lQfqh015Wox2';

  useEffect(() => {
    try {
      const unsubscribe = firestore()
        .collection('user')
        .doc(userId)
        .onSnapshot(doc => {
          setOrders(doc.data());
          // console.log(doc.data());
        });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //console.log(orders.orders);

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        {imaPorudzbina ? (
          <FlatList
            style={{
              width: '100%',
              marginTop: 5,
            }}
            contentContainerStyle={{
              alignItems: 'center',
              paddingRight: 10,
              paddingLeft: 10,
              paddingBottom: 150,
            }}
            horizontal={false}
            data={orders.orders}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <DeliveryCard
                restaurantName={item.restaurantName}
                orderContent={item.itemsInOrder}
                orderPrice={item.itemsPrice}
                deliveryPrice={item.deliveryFee}
                priceTotal={item.totalPrice}
                orderTime={item.timeOfOrder}
                randomDeliveryTime={item.deliveryTime}
                orderId={item.orderId}
              />
            )}
          />
        ) : (
          <Text style={{marginTop: '80%'}}>Trenutno nemate porudzbina!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
