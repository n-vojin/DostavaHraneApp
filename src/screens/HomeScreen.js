import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, parameters} from '../global/styles';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import SectionDividerTitle from '../components/SectionDividerTitle';
import CategoryScroll from '../components/CategoryScroll';
import FoodCard from '../components/FoodCard';

const dummyUrl =
  'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_34/1765652/squareat-inline-01-khu-210825.jpg';

export default function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor: colors.GHOST_WHITE, height: '100%'}}>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.container}>
          <CategoryScroll />
          <SectionDividerTitle title="Vama u blizini" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width: '100%',
            marginTop: 5,
            marginHorizontal: 3,
          }}
          contentContainerStyle={{
            paddingHorizontal: 3,
            paddingRight: 10,
          }}>
          <FoodCard
            restaurantName={'McDonalds'}
            numberOfReview={2}
            businessAddress={'Proleterska 28, Radicevic'}
            farAway={'Nearby.'}
            averageReview={'4.9'}
            images={dummyUrl}
            screenWidth={270}
          />
          <FoodCard
            restaurantName={'KFC'}
            numberOfReview={5}
            businessAddress={'Bul Patr. Pavl. 6, Novi Sad'}
            farAway={'Nearby.'}
            averageReview={'4.8'}
            images={dummyUrl}
            screenWidth={270}
          />
          <FoodCard
            restaurantName={'Picerija Venecija'}
            numberOfReview={5}
            businessAddress={'Jovana Popovica 3a, Zrenjanin'}
            farAway={'Nearby.'}
            averageReview={'5'}
            images={dummyUrl}
            screenWidth={270}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
