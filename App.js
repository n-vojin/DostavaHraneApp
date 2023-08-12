import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';

export default function App() {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.DEFAULT_GREEN}
      />
      <Header title="OVO JE TITLE" />
    </View>
  );
}

const styles = StyleSheet.create({});
