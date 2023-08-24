import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';

import {colors} from '../global/styles';

const ProductCard = ({
  productName,
  price,
  image,
  setCurrentBill,
  currentBill,
}) => {
  const [quantity, setQuantity] = useState(0);

  const decrement = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const indexToChange = currentBill.findIndex(
        obj => obj.name === productName,
      );
      if (indexToChange !== -1) {
        const updatedData = [...currentBill];
        updatedData.splice(indexToChange, 1, {
          ...updatedData[indexToChange],
          quantity: quantity - 1,
        });
        setCurrentBill(updatedData);
      }
    }
    if (quantity === 1) {
      setQuantity(0);
      const indexToRemove = currentBill.findIndex(
        obj => obj.name === productName,
      );
      if (indexToRemove !== -1) {
        let tempData = [...currentBill];
        tempData.splice(indexToRemove, 1);
        setCurrentBill(tempData);
      }
    }
  }, [quantity, currentBill]);

  const increment = useCallback(() => {
    setQuantity(quantity + 1);
    const indexToAdd = currentBill.findIndex(obj => obj.name === productName);
    if (indexToAdd !== -1) {
      const tempData = [...currentBill];
      tempData.splice(indexToAdd, 1, {
        ...tempData[indexToAdd],
        quantity: quantity + 1,
      });
      setCurrentBill(tempData);
    } else {
      setCurrentBill(pavlaka => [
        ...pavlaka,
        {name: productName, price: price, quantity: quantity + 1},
      ]);
    }
  }, [quantity, currentBill, setCurrentBill]);

  return (
    <View style={styles.view1}>
      <View style={styles.view4}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={{width: '74%', justifyContent: 'space-between'}}>
        <View style={styles.view2}>
          <Text style={styles.text1}>{productName}</Text>
          <Text style={styles.text2}>RSD {price}.00</Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity onPress={decrement} style={styles.addDugme}>
            <Icon
              type="material"
              name="remove"
              size={30}
              color={colors.SECONDARY_GREEN}
            />
          </TouchableOpacity>
          <Text style={[styles.text1, {marginHorizontal: 12}]}>{quantity}</Text>

          <TouchableOpacity onPress={increment} style={styles.addDugme}>
            <Icon
              type="material"
              name="add"
              size={30}
              color={colors.SECONDARY_GREEN}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  view1: {
    paddingVertical: 10,
    marginHorizontal: 13,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.gray4,
  },

  view2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },

  view3: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },

  text1: {
    fontSize: 17,
    color: colors.gray1,
  },
  text2: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.gray1,
  },

  view4: {height: 85, width: 95},
  image: {height: 75, width: 75, borderRadius: 3},
  addDugme: {
    backgroundColor: colors.DEFAULT_YELLOW,
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
