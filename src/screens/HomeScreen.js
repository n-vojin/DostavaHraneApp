import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors, parameters} from '../global/styles';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import SectionDividerTitle from '../components/SectionDividerTitle';
import FoodCard from '../components/FoodCard';
import {restaurantsData, filterData} from '../global/Data';
import CategoryCard from '../components/CategoryCard';
import {Icon} from '@rneui/base';

const dummyUrl =
  'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_34/1765652/squareat-inline-01-khu-210825.jpg';

export default function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor: colors.GHOST_WHITE, height: '100%'}}>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.container}>
          {/* TODO DOATI FLATLIST */}
          <FlatList
            style={{
              width: '100%',

              elevation: 50,
              marginTop: 5,
            }}
            contentContainerStyle={{
              paddingHorizontal: 5,
              marginVertical: 12,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <CategoryCard title={item.name} imageUrl={item.image} />
            )}
          />

          <SectionDividerTitle title="Vama u blizini" />
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
          }}
          horizontal={true}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <FoodCard
              images={item.images}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
            />
          )}
        />
        <SectionDividerTitle title="Najpopularnije" />
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
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <FoodCard
              images={item.images}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
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
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <FoodCard
              images={item.images}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
            />
          )}
        />
      </ScrollView>
      <View style={styles.floatingButton}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('RestaurantsMapScreen');
          }}>
          <Icon
            name="place"
            type="material"
            size={43}
            color={colors.SECONDARY_GREEN}
            style={{paddingTop: 3}}
          />
          <Text
            style={{
              color: colors.gray2,
              paddingBottom: 3,
              marginTop: -8,
              paddingRight: 1.5,
            }}>
            Map
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
