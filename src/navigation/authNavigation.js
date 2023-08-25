import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import RegisterScreen from '../screens/authScreens/RegisterScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'default', // Apply the desired animation
      }}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
