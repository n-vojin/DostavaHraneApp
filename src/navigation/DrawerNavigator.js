import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet} from 'react-native';
import DrawerContent from '../components/DrawerContent';
import {colors} from '../global/styles';
import CartScreen from '../screens/CartScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import RootClientTabs from './ClientTabs';

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
      {/* <Drawer.Screen
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
      /> */}
      <Drawer.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          title: 'Moj nalog',
          headerShown: false,
          drawerStyle: {
            borderBottomRightRadius: 40,
            borderTopRightRadius: 60,
            marginTop: -4,
          },
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="person"
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
