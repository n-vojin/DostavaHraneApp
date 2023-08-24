import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {colors, parameters} from '../global/styles';
import {useNavigation} from '@react-navigation/native';

export default function FoodCard({
  restaurantId,
  restaurantName,
  businessAddress,
  farAway,
  averageReview,
  images,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginBottom: 30}}
      onPress={() => {
        // TODO proslediti RestaurantScreen ID   NE RADI???????????????
        navigation.navigate('RestaurantScreen', {
          restaurantId: restaurantId,
        });
      }}>
      <View style={{...styles.cardView, width: 255}}>
        <Image style={{...styles.image, width: 255}} source={{uri: images}} />

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <Icon
                name="star"
                type="material"
                color={colors.SECONDARY_GREEN}
                size={22}
                iconStyle={{
                  marginTop: 5,
                }}
              />
              <Text style={styles.reviewText}>{averageReview}</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={colors.gray1}
                size={16}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.farAway}> {farAway}</Text>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.white,
    marginHorizontal: 8,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    paddingBottom: 1,
  },
  image: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    height: 150,
  },

  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
    marginLeft: 10,
  },

  distance: {
    flex: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  farAway: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 2,
    color: colors.gray3,
  },

  address: {
    fontSize: 13,
    paddingTop: 2.5,
    color: colors.gray2,
    paddingHorizontal: 4,
  },
  reviewText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.SECONDARY_GREEN,
    marginTop: 4,
    marginLeft: 3,
  },
});
