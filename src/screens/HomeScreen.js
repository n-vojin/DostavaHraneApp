import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, parameters} from '../global/styles';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import SectionDividerTitle from '../components/SectionDividerTitle';
import RestaurantCard from '../components/RestaurantCard';
import {restaurantsData, filterData} from '../global/Data';
import {Icon} from '@rneui/base';
import firestore from '@react-native-firebase/firestore';

const dummyUrl =
  'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_34/1765652/squareat-inline-01-khu-210825.jpg';

export default function HomeScreen({navigation}) {
  const [restaurants, setRestaurants] = useState([]);
  const [count, setCount] = useState(0);
  const [categorySelected, setCategorySelected] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const filteredRestaurants = restaurants.filter(item =>
    item.foodType.includes(categorySelected),
  );

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

  const sortedData = [...restaurants].sort((a, b) => b.review - a.review);

  const popularnoData = [...restaurants].slice(0, 5);
  const top5Data = sortedData.slice(0, 5);
  const hotData = [...restaurants].slice(2, 5);

  return (
    <View style={{backgroundColor: colors.GHOST_WHITE, height: '100%'}}>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.container}>
          <FlatList
            style={styles.categoryContainer}
            contentContainerStyle={{
              paddingHorizontal: 5,
              marginVertical: 12,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.imageAndTitleContainer}
                onPress={() => {
                  setCategorySelected(item.foodType);
                  setCategoryName(item.name);
                }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={item.image}
                />
                <Text style={styles.textWhite}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <SectionDividerTitle
            title={categoryName !== '' ? categoryName : 'Popularno'}
          />
        </View>

        <FlatList
          style={{
            width: '100%',
            marginTop: 5,
            marginHorizontal: 3,
            marginBottom: -20,
          }}
          contentContainerStyle={{
            paddingHorizontal: 3,
            paddingRight: 10,
          }}
          horizontal={true}
          data={filteredRestaurants}
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
              cardWidth={255}
            />
          )}
        />
        <SectionDividerTitle title="Najbolje ocenjeno" />
        <FlatList
          style={{
            width: '100%',
            marginTop: 5,
            marginHorizontal: 3,
            marginBottom: -20,
          }}
          contentContainerStyle={{
            paddingHorizontal: 3,
            paddingRight: 10,
          }}
          horizontal={true}
          data={top5Data}
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
              cardWidth={255}
            />
          )}
        />

        <SectionDividerTitle title="HOT!" />
        <FlatList
          style={{
            width: '100%',
            marginTop: 5,
            marginHorizontal: 3,
          }}
          contentContainerStyle={{
            paddingHorizontal: 3,
            paddingRight: 10,
          }}
          horizontal={true}
          data={hotData}
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
              cardWidth={255}
            />
          )}
        />
      </ScrollView>

      {/* <View style={styles.floatingButton}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            //navigation.navigate('RestaurantsMapScreen');
            console.log('restaurants', restaurants);
          }}>
          <Icon
            name="place"
            type="material"
            size={35}
            color={colors.SECONDARY_GREEN}
            style={{paddingTop: 3}}
          />
          <Text
            style={{
              color: colors.gray2,
              paddingBottom: 3,
              marginTop: -5,
              paddingRight: 1.5,
            }}>
            Map
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    elevation: 50,
    marginTop: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 66,
    height: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: colors.GHOST_WHITE,
    fontSize: 16,
    fontWeight: '500',
    position: 'absolute',
    marginTop: 64,
    marginLeft: 7,
    textShadowRadius: 10,
    textShadowColor: colors.gray1,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  imageAndTitleContainer: {
    marginLeft: 4,
    marginRight: 5,
  },
});
