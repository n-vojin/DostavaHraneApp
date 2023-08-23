import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import {
  colors,
  naslov,
  yellowButton,
  yellowButtonText,
  textInput,
  passwordInput,
  passwordContainer,
} from '../global/styles';
import {Avatar, Button} from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';

const userName = 'Nemanja';
const userSurname = 'Vojinovic';
const userNameSurname = userName + ' ' + userSurname;
const userEmail = 'nemanja@gmail.com';

export default function MyAccountScreen({navigation}) {
  const [editAccount, setEditAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleIzmenaPress = () => {
    Alert.alert(
      'Podvrdite akicju',
      'Da li ste sigurni da želite da IZMENITE podatke o nalogu?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            setEditAccount(false);
          },
        },
        {
          text: 'Izmeni',
          onPress: () => {
            //TODO DODAJ!!!!!!!!!!!! (IZMENI PODATKE NALOGA)
            console.log('IZMENI PODATKE NALOGA!');
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <View style={styles.view1}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size={110}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Pizza_food.jpg',
          }}
        />
        <View style={styles.view2}>
          <Text style={styles.userCardText2}>Hello!</Text>
          <Text style={styles.userCardText}>{userNameSurname}</Text>
          <Text style={[styles.userCardText3]}>{userEmail}</Text>
          <Text
            style={styles.userCardTextUnderline}
            onPress={() => {
              setEditAccount(true);
            }}>
            Edit account
          </Text>
        </View>
      </View>
      <View style={styles.formContainerView}>
        {editAccount && ( //!.......... Pocinje hidden view
          <View style={styles.viewHidden}>
            <Text style={[{...naslov, color: colors.SECONDARY_GREEN}]}>
              Izmeni podatke
            </Text>
            <TextInput
              style={{...textInput, marginBottom: 10}}
              value={userName}
            />
            <TextInput
              style={{...textInput, marginBottom: 10}}
              value={userSurname}
            />
            <TextInput
              style={{...textInput, marginBottom: 10}}
              value={userEmail}
            />
            <View style={{...passwordContainer, marginBottom: 10}}>
              <TextInput //                         Trenutni password
                style={{...passwordInput}}
                placeholder="Current Password *Required!" //    TODO DODATI DA SU REQUIRED POLJA ZA UNOS
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  color={colors.gray3}
                />
              </TouchableOpacity>
            </View>
            <View style={{...passwordContainer}}>
              <TextInput //                        Novi password
                style={{...passwordInput}}
                placeholder="New Password"
                secureTextEntry={!showPassword2}
                //              TODO   DODATI AKO JE PRAZAN DA SE NE MENJA PASSWORD
              />
              <TouchableOpacity
                onPress={() => {
                  setShowPassword2(!showPassword2);
                }}
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={showPassword2 ? 'eye-slash' : 'eye'}
                  size={20}
                  color={colors.gray3}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  ...yellowButton,
                  marginRight: 20,
                  backgroundColor: colors.CANCEL_BUTTON_RED,
                }}
                onPress={() => {
                  setEditAccount(false);
                }}>
                <Text
                  style={{
                    color: colors.GHOST_WHITE,
                    fontWeight: '700',
                    letterSpacing: 0.5,
                  }}>
                  Poništi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...yellowButton}}
                onPress={handleIzmenaPress}>
                <Text style={{...yellowButtonText}}>Izmeni podatke</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    height: 200,
    backgroundColor: colors.DEFAULT_YELLOW,
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: -35,
    paddingTop: 30,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.DEFAULT_BLUE,
  },
  view2: {
    marginLeft: 20,
  },
  userCardText: {
    color: colors.DEFAULT_BLUE,
    fontSize: 17,
  },
  userCardText3: {
    color: colors.DEFAULT_BLUE,
    fontSize: 17,
    fontWeight: '300',
  },

  userCardText2: {
    color: colors.DEFAULT_BLUE,
    fontSize: 17,
    fontWeight: '700',
    paddingBottom: 8,
  },
  userCardTextUnderline: {
    color: colors.DEFAULT_BLUE,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: '500',
    paddingTop: 8,
  },
  formContainerView: {
    backgroundColor: colors.GHOST_WHITE,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: '100%',
    paddingTop: 20,
  },
  viewHidden: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
