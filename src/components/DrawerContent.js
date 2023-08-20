import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from '@rneui/base';
import {colors} from '../global/styles';
import SectionDividerTitle from './SectionDividerTitle';

export default function DrawerContent(props) {
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
            <Text style={styles.userCardText}>Nemanja Vojinovic</Text>
            <Text style={[styles.userCardText, {fontWeight: '300'}]}>
              nemanja@gmail.com
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <SectionDividerTitle title={'Odjava'} />
      <DrawerItem
        style={{borderBottomRightRadius: 25}}
        label="Odjavi se"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => {
              //TODO NAPRAVI SIGN OUT!!!!
              signOut();
            }}
          />
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
