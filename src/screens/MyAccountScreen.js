import React from 'react';
import {View, Text} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';

export default function MyAccountScreen({navigation}) {
  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <Text>MyAccountScreen</Text>
    </View>
  );
}
