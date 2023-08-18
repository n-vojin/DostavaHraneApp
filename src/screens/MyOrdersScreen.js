import React from 'react';
import {View, Text} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';

export default function MyOrderScreen() {
  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" />
      <Text>MyOrderScreen</Text>
    </View>
  );
}
