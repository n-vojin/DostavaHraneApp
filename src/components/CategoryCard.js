import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {colors} from '../global/styles';
const CategoryCard = ({imageUrl, title}) => {
  return (
    <TouchableOpacity style={styles.imageAndTitleContainer}>
      <Image style={styles.image} resizeMode="cover" source={imageUrl} />

      <Text style={styles.textWhite}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
const styles = StyleSheet.create({
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
