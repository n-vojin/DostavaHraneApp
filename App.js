import 'react-native-gesture-handler';
import React, {createContext} from 'react';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import RestaurantScreen from './src/screens/RestaurantScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';
import ADMIN_SCREEN from './src/screens/ADMIN_SCREEN';

export const UserContext = createContext();

export default function App() {
  //return <ADMIN_SCREEN />;

  return <RootNavigator />;

  return <CheckOutScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
