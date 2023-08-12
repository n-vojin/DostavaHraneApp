import React from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {colors, parameters} from '../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({title, iconLeft}) {
  return (
    <View style={styles.header}>
      <Icon
        name={iconLeft}
        color={colors.GHOST_WHITE}
        size={28}
        onPress={() => {}}
      />
      <Text style={styles.headerText}>{title}</Text>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.SECONDARY_GREEN}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.SECONDARY_GREEN,
    height: parameters.headerHeight,
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 6,
  },
  headerText: {
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.GHOST_WHITE,
    marginLeft: 20,
  },
});
