import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, parameters} from '../global/styles';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import SectionDividerTitle from '../components/SectionDividerTitle';
import CategoryScroll from '../components/CategoryScroll';
export default function HomeScreen({navigation}) {
  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.container}>
          <CategoryScroll />
          <SectionDividerTitle title="Topla preporuka" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
