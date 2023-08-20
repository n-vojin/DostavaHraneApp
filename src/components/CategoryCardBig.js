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
const CategoryCardBig = ({imageUrl, title}) => {
  return (
    <TouchableOpacity style={styles.imageAndTitleContainer}>
      <Image style={styles.imageBig} resizeMode="cover" source={imageUrl} />

      <Text style={styles.textWhite}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCardBig;

const styles = StyleSheet.create({
  textWhite: {
    color: colors.GHOST_WHITE,
    fontSize: 25,
    fontWeight: '500',
    position: 'absolute',
    marginTop: 130,
    marginLeft: 5,
    textShadowRadius: 8,
    textShadowColor: colors.black,
    backgroundColor: 'rgba(240, 240, 240, 0.6)',
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
});
