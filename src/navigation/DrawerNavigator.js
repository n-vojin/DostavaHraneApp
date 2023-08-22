import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import RootClientTabs from './ClientTabs';
import {Icon} from '@rneui/base';
import {colors} from '../global/styles';
import DrawerContent from '../components/DrawerContent';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Početna',
          headerShown: false,
          drawerStyle: {
            borderBottomRightRadius: 40,
            borderTopRightRadius: 60,
            marginTop: -4,
          },
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-comunity"
              name="home"
              color={focussed ? colors.DEFAULT_YELLOW : colors.gray3}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Pogledaj korpu',
          headerShown: false,
          drawerStyle: {
            borderBottomRightRadius: 40,
            borderTopRightRadius: 60,
            marginTop: -4,
          },
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-comunity"
              name="shopping-cart"
              color={focussed ? colors.DEFAULT_YELLOW : colors.gray3}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  singOutContainer: {
    flex: 10,
  },
});
