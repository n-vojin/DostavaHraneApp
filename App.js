import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return <HomeScreen />;
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
