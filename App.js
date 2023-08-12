import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';
//import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInForm from './src/screens/authScreens/SignInScreen';
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
  return (
    <View style={styles.container}>
      <Header title="OVO JE TITLE" iconLeft="arrow-left" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
