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

const priceAdd = 1000; //TODO za IZMENITI (Dynamic Data)
const pricey = 3;
const priceyDollarsign = dollarSign(pricey);

const deliveryPrice = 0;
const restaurantName = 'McDonalds';

export default function RestaurantScreen({}) {
  const imageUrl =
    'https://s7d1.scene7.com/is/image/mcdonalds/HQ%20Global%20Menu%207%20Release%20-%20Thumbnail%20-%20700x400:hero-desktop?resmode=sharp2';

  const navigation = useNavigation();

  const [restaurantData, setRestaurantData] = useState([]);

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

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button buttonStyle={styles.cartButton} style={styles.cartButton}>
          <Text style={styles.buttonText}>Pogledaj korpu</Text>
          <Text style={styles.buttonText}>{priceAdd}RSD</Text>
        </Button>
      </View>
      <ScrollView style={{flex: 1}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.SECONDARY_GREEN}
        />

        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.bacgroundImage}
            source={{
              uri: imageUrl,
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
              {deliveryPrice === 0 ? (
                <Text>Free</Text>
              ) : (
                <Text>{deliveryPrice} din</Text>
              )}
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            style={{width: '100%'}}
            data={productData1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <ProductCard2
                image={item.image}
                productName={item.name}
                price={item.price}
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
