import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Icon} from '@rneui/base';
import {colors} from '../global/styles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {firestoreAutoId} from '../functions';
import {makeOrder} from '../functions/db/makeOrder';
import {UserContext} from '../../App';
import Toast from 'react-native-simple-toast';

function getCurrentTimeFormatted() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Formatting the hours and minutes to have leading zeros if needed
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const currentTimeFormatted = `${formattedHours}:${formattedMinutes}`;

  return currentTimeFormatted;
}
function getRandomNumber() {
  const min = 34;
  const max = 140;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CheckOutScreen({route}) {
  const userProfile = useContext(UserContext);
  const userId = userProfile.uid;

  const navigation = useNavigation();
  const {restaurantId, billArray, itemsPrice} = route.params;
  // const {restaurantId} = route.params;

  const [restaurantData, setRestaurantData] = useState([]);
  const [userData, setUserData] = useState([]);
  const priceFinal = itemsPrice + restaurantData.deliveryFee;

  const [itemListString, setItemListString] = useState('');

  useEffect(() => {
    try {
      const resData = firestore()
        .collection('restaurant')
        .doc(restaurantId)
        .get()
        .then(p => setRestaurantData(p.data()));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const resData = firestore()
        .collection('user')
        .doc(userId)
        .get()
        .then(p => setUserData(p.data()));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Use map to extract the desired values and create a string
  const extractedDataString = billArray
    .map(item => {
      return `${item.name}: ${item.price} RSD  x ${item.quantity}`;
    })
    .join('\n'); // Join the array of strings with line breaks
  console.log(extractedDataString);
  return (
    <>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.cartButton}
          style={styles.cartButton}
          onPress={() => {
            makeOrder({
              restaurantName: restaurantData.name,
              timeOfOrder: getCurrentTimeFormatted(),
              itemsInOrder: extractedDataString,
              itemsPrice: itemsPrice,
              deliveryFee: restaurantData.deliveryFee,
              deliveryTime: getRandomNumber(),
              totalPrice: priceFinal,
              orderId: firestoreAutoId(),
              userId: userId,
            });
            navigation.navigate('HomeScreen');
            Toast.show('USPEŠNO DODATO U PORUDŽBINE.');
            //TODO   DODAJ U BAZU PODATAKA ZA ORDERS
          }}>
          <Text style={styles.buttonText}>Poruči</Text>
          <Text style={styles.buttonText}>{priceFinal}.00 RSD</Text>
        </Button>
      </View>

      <View style={{flex: 1}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.SECONDARY_GREEN}
        />
        <ScrollView>
          <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.bacgroundImage}
              source={{
                uri: restaurantData?.image,
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.backArrowContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                type="material-community"
                name="arrow-left"
                color={colors.SECONDARY_GREEN}
                size={35}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailView}>
            <Text style={styles.restaurantTitle}>CHECKOUT</Text>
            <View style={styles.titleView}>
              <Text style={styles.restaurantTitle2}>{restaurantData.name}</Text>
              <View style={styles.view50}>
                <Icon type={'material-comunity'} name="moped" size={23} />
                {restaurantData.deliveryFee === 0 ? (
                  <Text>Free</Text>
                ) : (
                  <Text>{restaurantData.deliveryFee} RSD</Text>
                )}
              </View>
            </View>

            <View style={styles.reciept}>
              <View style={styles.recieptDivider}></View>
              <FlatList
                scrollEnabled={false}
                style={{width: '100%'}}
                data={billArray}
                renderItem={({item, index}) => (
                  <View style={{alignContent: 'flex-start'}}>
                    <Image
                      style={styles.productImage}
                      source={{uri: item.image}}
                    />
                    <View style={styles.recieptBar}>
                      <Text style={[styles.textSemibold, {flex: 10}]}>
                        {item.name}:
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text>{item.quantity} x </Text>
                        <Text> {item.price}.00 RSD</Text>
                      </View>
                    </View>
                  </View>
                )}
                horizontal={false}
              />
              <View style={[styles.recieptBar, {borderTopWidth: 2}]}>
                <Text>Dostava:</Text>
                <Text>{restaurantData.deliveryFee}.00 RSD</Text>
              </View>
              <View style={styles.recieptBarFinal}>
                <Text style={styles.textFinal}>UKUPNO:</Text>
                <Text style={styles.textFinal}>{priceFinal}.00 RSD</Text>
              </View>
              <View
                style={[
                  styles.recieptBar,
                  {justifyContent: 'flex-start', marginTop: 20},
                ]}>
                <Icon
                  type="material"
                  name="place"
                  color={colors.gray2}
                  size={22}
                />
                <Text style={{paddingLeft: 10, fontSize: 15}}>
                  Na adresu: {userData.location}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 130,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -35,
  },
  bacgroundImage: {
    width: 600,
    height: 400,
  },
  backArrowContainer: {
    position: 'absolute',
    left: 15,
    top: 5,
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: colors.GHOST_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailView: {
    height: '100%', //TEMPORARY
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: colors.GHOST_WHITE,
    alignItems: 'center',
    paddingBottom: 200,
  },
  restaurantTitle: {
    fontSize: 27,
    fontWeight: '400',
    color: colors.SECONDARY_GREEN,
    letterSpacing: 1,
    marginTop: 8,
    marginBottom: 5,
    borderBottomWidth: 1.8,
    borderColor: colors.SECONDARY_GREEN,
  },

  restaurantTitle2: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.SECONDARY_GREEN,
    letterSpacing: 0.8,
    marginTop: 8,
    marginBottom: 18,
  },
  buttonContainer: {
    position: 'absolute',
    border: '1px solid transparent',
    width: '80%',
    height: 55,
    zIndex: 40,
    bottom: 35,
    left: '10%',
  },
  cartButton: {
    width: '100%',
    height: 55,
    backgroundColor: colors.SECONDARY_GREEN,
    borderRadius: 38,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: colors.GHOST_WHITE,
    fontSize: 20,
    fontWeight: '500',
  },
  dollarSign: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.SECONDARY_GREEN,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 37,
    alignItems: 'center',
  },
  view50: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reciept: {
    width: '82%',
    marginHorizontal: 20,
  },
  recieptBar: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: colors.gray4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recieptBarFinal: {
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.gray2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFinal: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.gray2,
  },

  textSemibold: {
    fontWeight: '500',
    color: colors.gray2,
  },

  recieptDivider: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderColor: colors.gray3,
    marginBottom: 0,
    marginTop: -1,
  },
  productImage: {
    height: 50,
    width: 50,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: -2,
  },
});
