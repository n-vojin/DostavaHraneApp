import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrderScreen from '../screens/MyOrdersScreen';
import SearchScreen from '../screens/SearchScreen';
import {colors} from '../global/styles';

const Tab = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      barStyle={{backGroundColor: 'white'}}
      screenOptions={{tabBarShowLabel: true}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              type="material"
              color={colors.GHOST_WHITE}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="search"
              type="material"
              color={colors.GHOST_WHITE}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="truck-fast"
              type="material-community"
              color={colors.GHOST_WHITE}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="person"
              type="material"
              color={colors.GHOST_WHITE}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
