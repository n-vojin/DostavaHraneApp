import React from 'react';
import {View, Text} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';

export default function MyOrderScreen({navigation}) {
  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <Text>MyOrderScreen</Text>
    </View>
  );
}
