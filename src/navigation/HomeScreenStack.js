import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

const ClientHome = createNativeStackNavigator();

export function HomeScreenStack() {
  return (
    <ClientHome.Navigator>
      <ClientHome.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientHome.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientHome.Navigator>
  );
}

const styles = StyleSheet.create({});
