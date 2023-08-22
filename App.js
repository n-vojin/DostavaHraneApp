import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import RestaurantScreen from './src/screens/RestaurantScreen';

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
