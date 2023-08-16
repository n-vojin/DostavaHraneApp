import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import {
  colors,
  naslov,
  centerScreenForm,
  yellowButton,
  yellowButtonText,
  basicText,
  textInput,
  passwordInput,
  passwordContainer,
} from '../../global/styles';

const SignInScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  {
    return (
      <View style={styles.container}>
        <Header title="Sign in" iconLeft="arrow-left" navigation={navigation} />
        <View style={[{...centerScreenForm, marginTop: '40%'}]}>
          <Text style={[{...naslov}]}>Sign in</Text>
          <TextInput style={{...textInput}} placeholder="E-mail" />
          <View style={{...passwordContainer}}>
            <TextInput
              style={{...passwordInput}}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              <Icon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color={colors.gray3}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{...yellowButton}}
            onPress={() => {
              //TODO Uloguj ga ***************************
              navigation.navigate('RootClientTabs');
              //?????????????????????????????????????????????????????????????? ULOGUJ GA ***************************
            }}>
            <Text style={{...yellowButtonText}}>Uloguj se</Text>
          </TouchableOpacity>
          <View style={styles.createAccountContainer}>
            <Text style={{...basicText}}>Još nisi registrovan?</Text>
            <Text
              style={styles.clickableText}
              onPress={() => {
                //Prebaci ga na stranicu za pravljenje naloga
                navigation.navigate('RegisterScreen');
              }}>
              Napravi nalog
            </Text>
          </View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },

  createAccountContainer: {
    height: 55,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  clickableText: {
    textDecorationLine: 'underline',
    paddingLeft: '5%',
    color: colors.black,
  },
});
export default SignInScreen;
