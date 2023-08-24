import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import {filterData} from '../global/Data';
import {colors} from '../global/styles';

import * as Animatable from 'react-native-animatable';
import {Icon} from '@rneui/base';
import RestaurantCard from '../components/RestaurantCard';
import firestore from '@react-native-firebase/firestore';

export default function SearchScreen({navigation}) {
  const [restaurants, setRestaurants] = useState([]);
  const [count, setCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(restaurants);

  const updateFilteredItems = searchTerm => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchingItems = restaurants.filter(item =>
      item.name.toLowerCase().includes(searchTermLower),
    );
    setFilteredItems(matchingItems);
  };

  useEffect(() => {
    try {
      const unsubscribe = firestore()
        .collection('restaurant')
        .onSnapshot(doc => {
          setRestaurants([]);
          setCount(doc.docs.length);
          doc.forEach(async d => {
            await setRestaurants(rest => [...rest, d.data()]);
          });
        });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);
  return (
    <View style={{alignItems: 'center'}}>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <View style={styles.TextInput}>
        <Animatable.View
          animation={textInputFossued ? 'fadeInRight' : 'fadeInLeft'}
          duration={400}>
          <Icon
            name={textInputFossued ? 'search' : 'search'}
            style={styles.icon2}
            type="material"
            iconStyle={{
              marginRight: 5,
              marginLeft: 6,
              color: colors.gray1,
            }}
          />
        </Animatable.View>
        <TextInput //! !!!!!!!!!!!! TEXT INPUT  !!!!!!!!!!!!
          style={{width: '90%'}}
          placeholder="Pretražite restorane"
          autoFocus={false}
          ref={textInput}
          onFocus={() => {
            setTextInputFossued(true);
          }}
          onBlur={() => {
            setTextInputFossued(false);
          }}
          value={searchTerm}
          onChangeText={text => {
            setSearchTerm(text);
            updateFilteredItems(text);
          }}
        />
        <Animatable.View
          animation={textInputFossued ? 'fadeInLeft' : ''}
          duration={400}>
          <Icon
            name={textInputFossued ? 'cancel' : null}
            iconStyle={{color: colors.gray3}}
            type="material"
            style={{marginRight: 10}}
            onPress={() => {
              textInput.current.clear();
            }}
          />
        </Animatable.View>
      </View>
      <FlatList
        style={{
          width: '100%',
          marginTop: 5,
          marginHorizontal: 3,
        }}
        contentContainerStyle={{
          paddingHorizontal: 3,
          paddingRight: 10,
          paddingBottom: 150,
        }}
        horizontal={false}
        data={filteredItems}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <RestaurantCard
            restaurantId={item.id}
            images={item.image}
            restaurantName={item.name}
            farAway={item.farAway}
            businessAddress={item.adress}
            averageReview={item.review}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatList: {
    paddingBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textWhite: {
    color: colors.GHOST_WHITE,
    fontSize: 25,
    fontWeight: '500',
    position: 'absolute',
    marginTop: 130,
    marginLeft: 5,
    textShadowRadius: 8,
    textShadowColor: colors.black,
    backgroundColor: 'rgba(53, 54, 52, 0.5)',
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  imageBig: {
    width: 170,
    height: 170,
    borderRadius: 8,
  },
  imageAndTitleContainer: {
    margin: 8,
  },
  TextInput: {
    width: '93%',
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.gray3,
  },
});
