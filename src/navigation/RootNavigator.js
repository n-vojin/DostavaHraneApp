import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './authNavigation';
import {LogBox} from 'react-native';

//LogBox.ignoreAllLogs(); //!Ignore all log notifications

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
