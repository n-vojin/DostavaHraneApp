import firestore from '@react-native-firebase/firestore';
import {Avatar} from '@rneui/base';
import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserContext} from '../../App';
import Header from '../components/Header';
import {
  colors,
  naslov,
  textInput,
  yellowButton,
  yellowButtonText,
} from '../global/styles';
import {updateUser} from '../functions/update';

export default function MyAccountScreen({navigation}) {
  const [userData, seUserData] = useState([]);

  const userProfile = useContext(UserContext);
  const userId = userProfile.uid;

  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [userNameSurname, setUserNameSurname] = useState('');

  useEffect(() => {
    try {
      const resData = firestore()
        .collection('user')
        .doc(userId)
        .get()
        .then(p => seUserData(p.data()));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [editAccount, setEditAccount] = useState(false);

  const handleIzmenaPress = () => {
    Alert.alert(
      'Potvrdite akciju',
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
            updateUser(userId, newFirstName, newLastName, newLocation);
            setUserNameSurname(newFirstName + ' ' + newLastName);

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
      <Header
        iconLeft={'arrow-left'}
        title={'Moj nalog'}
        navigation={navigation}
      />
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
          <Text style={styles.userCardText}>
            {userData.firstName} {userData.lastName}
          </Text>
          <Text style={[styles.userCardText3]}>{userData.email}</Text>
          <Text
            style={styles.userCardTextUnderline}
            onPress={() => {
              setEditAccount(true);
              console.log(userId);
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
              placeholder={userData.firstName}
              value={newFirstName}
              onChangeText={text => setNewFirstName(text)}
            />
            <TextInput
              style={{...textInput, marginBottom: 10}}
              value={newLastName}
              placeholder={userData.lastName}
              onChangeText={text => setNewLastName(text)}
            />
            <TextInput
              style={{...textInput, marginBottom: 10}}
              value={newLocation}
              placeholder={'Unesi lokaciju.'}
              onChangeText={text => setNewLocation(text)}
            />

            <View style={{flexDirection: 'row', marginTop: 20}}>
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
    fontSize: 15,
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
