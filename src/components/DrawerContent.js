import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {Avatar, Icon} from '@rneui/base';
import {signOut} from '../functions/signOut';
import {colors} from '../global/styles';
import SectionDividerTitle from './SectionDividerTitle';
import {UserContext} from '../../App';

export default function DrawerContent(props) {
  const [userData, seUserData] = useState([]);

  const userProfile = useContext(UserContext);
  const userId = userProfile.uid;

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

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userCard}>
          <Avatar
            rounded
            avatarStyle={styles.avatar}
            size={90}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Pizza_food.jpg',
            }}
          />
          <View style={{paddingLeft: 6}}>
            <Text style={styles.userCardText}>
              {userData?.firstName} {userData?.lastName}
            </Text>
            <Text style={[styles.userCardText, {fontWeight: '300'}]}>
              {userData?.email}
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <SectionDividerTitle title={'Odjava'} />

      <DrawerItem
        style={{borderBottomRightRadius: 25}}
        label="Odjavi se"
        onPress={signOut}
        icon={({color, size}) => (
          <TouchableOpacity>
            <Icon
              type="material-community"
              name="logout-variant"
              color={color}
              size={size}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 7,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.DEFAULT_BLUE,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.DEFAULT_YELLOW,
    borderTopRightRadius: 40,
    height: 160,
    paddingLeft: 7,
  },
  userCardText: {
    color: colors.DEFAULT_BLUE,
    fontSize: 15,
  },
});
