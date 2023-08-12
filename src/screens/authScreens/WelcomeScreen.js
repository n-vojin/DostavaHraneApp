import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import {
  colors,
  naslov,
  centerScreenForm,
  yellowButton,
  yellowButtonText,
  basicText,
  greenButton,
  greenButtonOutline,
} from '../../global/styles';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[{...naslov}, styles.velikiTekst]}>
        Najbrži u vašem gradu, a i šire!
      </Text>

      <View style={{...centerScreenForm}}>
        <Image
          source={require('../../images/LogoColorful3.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Dobrodošli!</Text>

        <TouchableOpacity style={{...greenButton, marginTop: 0}}>
          <Text style={styles.textWhite}>Uloguj se</Text>
        </TouchableOpacity>
        <Text>ili</Text>
        <TouchableOpacity style={{...greenButtonOutline}}>
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
    color: colors.DEFAULT_GREEN,
    fontSize: 18,
    fontWeight: '300',
    marginTop: '20%',
    marginBottom: '25%',
  },
});
