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
} from '../../global/styles';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Perform sign-in logic here
    console.log('Sign-in pressed');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  {
    return (
      <View style={styles.container}>
        <Header title="Sign in" iconLeft="arrow-left" />
        <View style={[{...centerScreenForm, marginTop: '40%'}]}>
          <Text style={[{...naslov}]}>Sign in</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <View style={styles.passWordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={text => setPassword(text)}
              value={password}
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
          <TouchableOpacity style={{...yellowButton}} onPress={handleSignIn}>
            <Text style={{...yellowButtonText}}>Uloguj se</Text>
          </TouchableOpacity>
          <View style={styles.createAccountContainer}>
            <Text style={{...basicText}}>Još nisi registrovan?</Text>
            <Text
              style={styles.clickableText}
              onPress={() => {
                //Prebaci ga na stranicu za pravljenje naloga
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

  TextInput: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.gray3,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 8,
    paddingLeft: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  passWordContainer: {
    height: 49,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gray3,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 15,
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
export default SignInForm;
