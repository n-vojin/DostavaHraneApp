import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {Button} from '@rneui/base';

export default function CartCard({restaurantName, orderContent, priceTotal}) {
  return (
    <View style={styles.containerCartCard}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Narudžbina</Text>
        <Button
          buttonStyle={styles.cancelButton}
          style={styles.cancelButton}
          onPress={() => {
            // TODO POP UP DA LI STE SIGURNI DA ZELITE DA OBRISETE!!!
          }}>
          <Icon
            type="material"
            name="remove-circle-outline"
            size={30}
            color={colors.GHOST_WHITE}
          />
        </Button>
      </View>

      <View style={styles.botContainer}>
        <ScrollView style={styles.orderDetailContainer}>
          <Text style={styles.text1}>Restoran: {restaurantName}</Text>
          <Text style={styles.text2}>
            {orderContent}
            2x Burger, 3x Murger, 4x Gurger, 2x Cola
          </Text>
          <Text style={styles.text2}>aaa</Text>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderColor: colors.DEFAULT_GREEN,
            paddingLeft: 8,
            borderTopLeftRadius: 10,
          }}>
          <Text style={styles.cenaTekst}>{priceTotal}1000 RSD</Text>
          <Button
            buttonStyle={styles.confirmButton}
            style={styles.confirmButton}
            onPress={() => {
              // TODO PREBACI GA NA CONFIRM ORDER SCREEN!!!
            }}>
            <Icon
              type="material"
              name="check-circle-outline"
              size={30}
              color={colors.GHOST_WHITE}
            />
          </Button>
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
    fontWeight: '300',
    color: colors.gray3,
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
  cancelButton: {
    width: 70,
    backgroundColor: colors.CANCEL_BUTTON_RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
  },
  confirmButton: {
    width: 70,
    backgroundColor: colors.DEFAULT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 25,
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
