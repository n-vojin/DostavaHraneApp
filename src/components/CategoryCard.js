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
      <Image
        style={styles.image}
        source={{uri: imageUrl}}
        resizeMode="center"
      />

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
    textShadowRadius: 5,
    textShadowColor: colors.gray3,
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
