import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
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
import {register} from '../../functions/register';

const RegisterScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  {
    return (
      <View style={styles.container}>
        <Header
          title="Registracija"
          iconLeft="arrow-left"
          navigation={navigation}
        />
        <View style={[{...centerScreenForm, marginTop: '40%'}]}>
          <Text style={[{...naslov}]}>Napravi nalog</Text>
          <TextInput
            style={{...textInput, marginBottom: 10}}
            placeholder="Ime"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            style={{...textInput, marginBottom: 10}}
            placeholder="Prezime"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            style={{...textInput, marginBottom: 10}}
            placeholder="E-mail"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View style={{...passwordContainer}}>
            <TextInput
              style={{...passwordInput}}
              placeholder="Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
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
              register(email, password, firstName, lastName);
            }}>
            <Text style={{...yellowButtonText}}>Registruj se</Text>
          </TouchableOpacity>
          <View style={styles.vecImasNalogContainer}>
            <Text style={{...basicText}}>Već imaš nalog?</Text>
            <Text
              style={styles.clickableText}
              onPress={() => {
                //Prebaci ga na stranicu za pravljenje naloga
                navigation.navigate('SignInScreen');
              }}>
              Uloguj se
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

  vecImasNalogContainer: {
    height: 55,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickableText: {
    textDecorationLine: 'underline',
    paddingLeft: '5%',
    color: colors.black,
  },
});
export default RegisterScreen;
