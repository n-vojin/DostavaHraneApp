import 'react-native-gesture-handler';
import React, {useState, useEffect, createContext} from 'react';
import {StyleSheet} from 'react-native';
//import RootNavigator from './src/navigation/RootNavigator';
import ADMIN_SCREEN from './src/screens/ADMIN_SCREEN';
//!!!
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/authScreens/WelcomeScreen';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import RegisterScreen from './src/screens/authScreens/RegisterScreen';
import DrawerNavigator from './src/navigation/DrawerNavigator';

import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(); //!Ignore all log notifications UKLJUCI NA KRAJU
//!!!
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator();
export const UserContext = createContext();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [authUser, setAuthUser] = useState();
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .onSnapshot(async doc => {
          await setUser(doc.data());
        });
    } catch (error) {
      console.error(error);
    }
  };

  function onAuthStateChanged(user) {
    setAuthUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    let abortController = new AbortController();
    if (authUser) {
      getUser();
    }
    return () => {
      abortController.abort();
    };
  }, [authUser]);

  if (initializing) {
    return null;
  }

  return (
    <UserContext.Provider value={authUser ? authUser : null}>
      <NavigationContainer>
        <Stack.Navigator>
          {!authUser ? (
            <>
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
            </>
          ) : (
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
  //return <ADMIN_SCREEN />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
