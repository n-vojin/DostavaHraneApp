import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  colors,
  naslov,
  centerScreenForm,
  basicText,
  greenButton,
  greenButtonOutline,
} from '../../global/styles';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function WelcomeScreen({navigation}) {
  //  useEffect(() => {
  //    try {
  //      const unsubscribe = firestore()
  //        .collection('restaurant')
  //        .onSnapshot(doc => {
  //          doc.forEach(d => {
  //            console.log(d.data());
  //          });
  //        });
  //      return () => unsubscribe();
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  }, []);
  return (
    <View style={styles.container}>
      <Text style={[{...naslov}, styles.velikiTekst]}>
        Najbrži u vašem gradu, a i šire!
      </Text>

      <View style={{...centerScreenForm}}>
        <Image
          source={require('../../images/LogoColorful4.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Dobrodošli!</Text>

        <TouchableOpacity
          style={{...greenButton, marginTop: 0}}
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}>
          <Text style={styles.textWhite}>Uloguj se</Text>
        </TouchableOpacity>
        <Text>ili</Text>
        <TouchableOpacity
          style={{...greenButtonOutline}}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text style={{...basicText, fontSize: 16}}>Napravi nalog</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',

    //borderWidth: 2,
  },
  textWhite: {
    color: colors.GHOST_WHITE,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 165,
  },
  welcomeText: {
    color: colors.gray3,
    fontSize: 19,
    fontWeight: '400',
    margin: 10,
    marginTop: 20,
  },
  velikiTekst: {
    color: colors.SECONDARY_GREEN,
    fontSize: 18,
    fontWeight: '300',
    marginTop: '20%',
    marginBottom: '25%',
  },
});
