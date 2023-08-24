import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Icon} from '@rneui/base';
import {colors} from '../global/styles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import {productData1} from '../global/Data'; //! za brisati
import ProductCard2 from '../components/ProductCard2'; //! za brisati
import {dollarSign} from '../functions';

export default function RestaurantScreen({route}) {
  const navigation = useNavigation();

  const {restaurantId} = route.params;

  const [restaurantData, setRestaurantData] = useState([]);

  const [currentBill, setCurrentBill] = useState([]);

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

  console.log('curr', currentBill);
  console.log('id', restaurantId);
  const priceyDollarsign = dollarSign(restaurantData.pricey);

  //console.log(currentBill.filter(el => el.name === 'Cezar salata').length);

  const addedItemsPrice = currentBill?.reduce((acc, cur) => {
    return acc + Number(cur.price) * cur.quantity;
  }, 0);

  return (
    <>
      {currentBill.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.cartButton}
            style={styles.cartButton}
            onPress={() => {
              navigation.navigate('CartScreen');
            }}>
            <Text style={styles.buttonText}>Dodaj u korpu</Text>
            <Text style={styles.buttonText}>{addedItemsPrice} RSD</Text>
          </Button>
        </View>
      )}

      <ScrollView style={{flex: 1}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.SECONDARY_GREEN}
        />

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
          <View style={styles.titleView}>
            <View style={styles.view50}>
              <Text style={styles.dollarSign}>{priceyDollarsign}</Text>
            </View>

            <Text style={styles.restaurantTitle}>{restaurantData.name}</Text>
            <View style={styles.view50}>
              <Icon type={'material-comunity'} name="moped" size={23} />
              {restaurantData.deliveryFee === 0 ? (
                <Text>Free</Text>
              ) : (
                <Text>{restaurantData.deliveryFee} din</Text>
              )}
            </View>
          </View>

          <FlatList
            scrollEnabled={false}
            style={{width: '100%'}}
            data={restaurantData.menu}
            renderItem={({item, index}) => (
              <ProductCard2
                image={item.image}
                productName={item.name}
                price={item.price}
                setCurrentBill={setCurrentBill}
                currentBill={currentBill}
              />
            )}
            horizontal={false}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
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
    height: 1000, //TEMPORARY
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: colors.GHOST_WHITE,
    alignItems: 'center',
  },
  restaurantTitle: {
    fontSize: 27,
    fontWeight: '400',
    color: colors.SECONDARY_GREEN,
    letterSpacing: 1,
    marginTop: 8,
    marginBottom: 18,
    borderBottomWidth: 1.8,
    borderColor: colors.SECONDARY_GREEN,
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
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 37,
    alignItems: 'center',
  },
  view50: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
