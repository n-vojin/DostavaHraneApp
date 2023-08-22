import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import CartCard from '../components/CartCard';
import SectionDividerTitle from '../components/SectionDividerTitle';
import Header from '../components/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header iconLeft={'arrow-left'} title={'Korpa'} navigation={navigation} />
      <ScrollView
        // !!!! TREBA DA BUDE FLATLISTA U FINALNOJ VERZIJI
        contentContainerStyle={{
          width: SCREEN_WIDTH,
          alignItems: 'center',
        }}>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
