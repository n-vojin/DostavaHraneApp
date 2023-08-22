import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

const restaurantName = 'McDonalds';
const orderContent = '2x Burger, 3x Murger, 4x Gurger, 2x Cola';
const orderPrice = 1250;
const deliveryPrice = 250; //TODO_______________________ za IZMENITI (Dynamic Data)
const priceTotal = deliveryPrice + orderPrice;

const randomDeliveryTime = 45;
const orderTime = '16:32';

export default function DeliveryCard({}) {
  return (
    <View style={styles.containerCartCard}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Dostava</Text>
      </View>

      <View style={styles.botContainer}>
        <ScrollView style={styles.orderDetailContainer}>
          <Text style={styles.text1}>
            Restoran: {restaurantName} . . . . . . {orderTime}
          </Text>
          <Text style={styles.text2}>{orderContent}</Text>
          <Text style={styles.text2}>= {orderPrice} RSD</Text>
          <Text style={styles.text2}>Cena dostave: {deliveryPrice} RSD</Text>
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text2, {marginTop: 5, marginRight: 10}]}>
            Vreme dostave ~ {randomDeliveryTime} min
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderColor: colors.SECONDARY_GREEN,
              padding: 4,
              borderTopLeftRadius: 10,
            }}>
            <Text style={styles.cenaTekst}>Ukupno: {priceTotal}.00 din</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCartCard: {
    width: '95%',
    backgroundColor: colors.GHOST_WHITE,
    borderColor: colors.DEFAULT_GREEN,
    borderWidth: 1,
    height: 300,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.SECONDARY_GREEN,
    flex: 5,
    marginLeft: 10,
    marginTop: 7,
  },
  cenaTekst: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.gray2,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 8,
  },
  topContainer: {
    flex: 0.75,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.DEFAULT_GREEN,
    backgroundColor: colors.gray5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  botContainer: {
    flex: 4,
    alignItems: 'flex-end',
  },
  orderDetailContainer: {
    flex: 5,
    width: '100%',
    paddingLeft: 5,
  },
  text1: {
    fontSize: 19,
    fontWeight: '400',
  },
  text2: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray3,
  },
});
