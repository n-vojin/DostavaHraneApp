import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {Button} from '@rneui/base';
import {deleteOrder} from '../functions/db/deleteOrder';

export default function DeliveryCard({
  restaurantName,
  orderContent,
  orderPrice,
  deliveryPrice,
  priceTotal,
  orderTime,
  randomDeliveryTime,
  orderId,
  userId,
}) {
  return (
    <View style={styles.containerCartCard}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Porudžbina</Text>
      </View>

      <View style={styles.botContainer}>
        <ScrollView style={styles.orderDetailContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text1}>Iz: {restaurantName}</Text>
            <Text style={styles.text1}> u {orderTime} </Text>
          </View>
          <Text style={styles.text2}>{orderContent}</Text>
          <Text style={styles.text2}>= {orderPrice} RSD</Text>
          <Text style={styles.text2}>Cena dostave: {deliveryPrice} RSD</Text>
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text2, {marginTop: 5, marginRight: 10}]}>
            Dostava trajanje ~ {randomDeliveryTime} min
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
            <Text style={styles.cenaTekst}>Ukupno: {priceTotal}.00 RSD</Text>
          </View>
        </View>
      </View>
      <Button
        title="Potvrdi zavrsenu dostavu"
        color={colors.SECONDARY_GREEN}
        buttonStyle={{borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
        onPress={() => {
          //TODO OBRISI DOSTAVU IZ DATABAZE
          deleteOrder(userId, orderId);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCartCard: {
    width: '100%',
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
    width: '100%',
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
