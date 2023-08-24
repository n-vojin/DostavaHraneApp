import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Vibration,
} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {Button} from '@rneui/base';

const deliveryPrice = 250; //TODO za IZMENITI (Dynamic Data)
const priceTotal = 1250;
const orderContent = '2x Burger, 3x Murger, 4x Gurger, 2x Cola';
const restaurantName = 'McDonalds';

const handleDeletePress = () => {
  Vibration.vibrate(80);
  Alert.alert(
    'Podvrdite brisanje',
    'Da li želite da obrišete narudžbinu iz korpe?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          //TODO Perform delete action here (obrisi u cartu)
          console.log('Item deleted');
        },
        style: 'destructive',
      },
    ],
    {cancelable: true},
  );
};

const handleProceedPress = () => {
  Alert.alert(
    'Podvrdite akicju',
    'Da li želite da završite porudžbinu?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Nastavi',
        onPress: () => {
          //TODO Perform ADD action here (IDI NA CHECKOUT)
          console.log('Idi na checkout');
        },
        style: 'destructive',
      },
    ],
    {cancelable: true},
  );
};

export default function CartCard({}) {
  return (
    <View style={styles.containerCartCard}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Narudžbina</Text>
        <Button
          buttonStyle={styles.cancelButton}
          style={styles.cancelButton}
          onLongPress={handleDeletePress}>
          <Icon
            type="material"
            name="remove-circle-outline"
            size={30}
            color={colors.SECONDARY_GREEN}
          />
        </Button>
      </View>

      <View style={styles.botContainer}>
        <ScrollView style={styles.orderDetailContainer}>
          <Text style={styles.text1}>Restoran: {restaurantName}</Text>
          <Text style={styles.text2}>{orderContent}</Text>
          <Text style={styles.text2}>Cena dostave: {deliveryPrice} RSD</Text>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderColor: colors.SECONDARY_GREEN,
            paddingLeft: 8,
            borderTopLeftRadius: 10,
          }}>
          <Text style={styles.cenaTekst}>Ukupno: {priceTotal}.00 RSD</Text>
          <Button
            buttonStyle={styles.confirmButton}
            style={styles.confirmButton}
            onPress={handleProceedPress}>
            <Icon
              type="material"
              name="check-circle-outline"
              size={30}
              color={colors.DEFAULT_YELLOW}
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
    backgroundColor: colors.DEFAULT_YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
  },
  confirmButton: {
    width: 70,
    backgroundColor: colors.SECONDARY_GREEN,
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
