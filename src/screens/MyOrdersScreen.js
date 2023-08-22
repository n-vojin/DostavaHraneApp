import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import DeliveryCard from '../components/DeliveryCard';

const imaPorudzbina = true; //TODO Izmeniti dodati (DynamicData)

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MyOrderScreen({navigation}) {
  return (
    <View style={{alignItems: 'center'}}>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />

      {imaPorudzbina ? (
        <ScrollView
          // !!!! TREBA DA BUDE FLATLISTA U FINALNOJ VERZIJI
          contentContainerStyle={{
            width: SCREEN_WIDTH,
            alignItems: 'center',
          }}>
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
        </ScrollView>
      ) : (
        <Text style={{marginTop: '80%'}}>Trenutno nemate porudzbina!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
