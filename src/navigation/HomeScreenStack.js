import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CheckOutScreen from '../screens/CheckOutScreen';

const ClientHome = createNativeStackNavigator();

export function HomeScreenStack() {
  return (
    <ClientHome.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
      }}>
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
      <ClientHome.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientHome.Navigator>
  );
}

const styles = StyleSheet.create({});
