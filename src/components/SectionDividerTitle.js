import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../global/styles';

export default function SectionDividerTitle({title}) {
  return (
    <View style={styles.container}>
      <View style={styles.barStart}></View>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.bar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 6,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginLeft: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.gray3,
  },
  barStart: {
    width: '6%',
    height: 0,
    borderColor: colors.gray3,
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: 6,
  },
  bar: {
    width: '100%',
    height: 0,
    borderColor: colors.gray3,
    borderBottomWidth: 1,
    flex: 1,
    marginBottom: 10,
    marginLeft: 6,
  },
});
