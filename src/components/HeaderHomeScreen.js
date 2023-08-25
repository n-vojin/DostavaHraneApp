import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {colors, parameters, badgeStyle} from '../global/styles';
import {Icon, withBadge} from '@rneui/base';

export default function HomeHeader({iconLeft, navigation, logo}) {
  const BadgeIcon = withBadge(3, {...badgeStyle})(Icon);

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Icon
          type="MaterialCommunityIcons"
          name={iconLeft}
          color={colors.GHOST_WHITE}
          size={30}
        />
      </TouchableOpacity>

      <Image
        style={styles.headerImageStyle}
        source={require('../images/LogoColorful4.png')}
        resizeMode="contain"
      />
      <View style={styles.allignJustifyCenter}></View>

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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 6,
    elevation: 15,
  },
  headerText: {
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.GHOST_WHITE,
    marginLeft: 20,
  },
  headerImageStyle: {
    height: 38,
    width: '30%',
    marginBottom: 9,
  },
  allignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
});
