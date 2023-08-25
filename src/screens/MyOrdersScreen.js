import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import DeliveryCard from '../components/DeliveryCard';
import firestore from '@react-native-firebase/firestore';
import {UserContext} from '../../App';

const imaPorudzbina = true; //TODO Izmeniti dodati (DynamicData)

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MyOrderScreen({navigation}) {
  const userProfile = useContext(UserContext);
  const userId = userProfile.uid;

  const [orders, setOrders] = useState([]);

  const [count, setCount] = useState(0);

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

  console.log(orders.orders);
  if (1 !== 0) {
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
                userId={userId}
              />
            )}
          />

          <Text style={{marginTop: '80%'}}>Trenutno nemate porudzbina!</Text>
        </View>
      </View>
    );
  }
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
        <Text style={{marginTop: '80%'}}>Trenutno nemate porudzbina!</Text>
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
