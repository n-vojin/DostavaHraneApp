import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrderScreen from '../screens/MyOrdersScreen';
import SearchScreen from '../screens/SearchScreen';
import {colors} from '../global/styles';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import {SearchScreenStack} from './SearchScreenStack';
import {HomeScreenStack} from './HomeScreenStack';

const Tab = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={colors.DEFAULT_GREEN}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.SECONDARY_GREEN,
      }}>
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreenStack"
        component={SearchScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={28} />
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
              color={color}
              size={30}
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
            <Icon name="person" type="material" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="map" type="material" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
