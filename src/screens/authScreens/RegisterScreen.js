import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../../components/Header';

export default function RegisterScreen({navigation}) {
  return (
    <View>
      <Header
        iconLeft="arrow-left"
        title={'REGISTER SCREEN'}
        navigation={navigation}
      />
      <Text>Ovo je register screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
