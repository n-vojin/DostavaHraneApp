import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import RootClientTabs from './ClientTabs';
import {Icon} from '@rneui/base';
import {colors} from '../global/styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          headerShown: false,
          drawerStyle: {
            borderBottomRightRadius: 40,
            borderTopRightRadius: 40,
            paddingTop: 30,
          },
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-comunity"
              name="home"
              color={focussed ? colors.DEFAULT_BLUE : colors.gray3}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
