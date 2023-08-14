import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import CategoryCard from './CategoryCard';
import {colors} from '../global/styles';

const dummyUrl =
  'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_34/1765652/squareat-inline-01-khu-210825.jpg';

export default function CategoryScroll() {
  return (
    <ScrollView
      style={{
        width: '100%',
        backgroundColor: 'rgba(227, 227, 227, 0.48)',
        marginTop: 5,
      }}
      contentContainerStyle={{
        paddingHorizontal: 5,
        marginVertical: 12,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoryCard title={'FastFood'} imageUrl={dummyUrl} />
      <CategoryCard title={'Azijska'} imageUrl={dummyUrl} />
      <CategoryCard title={'Meksicka'} imageUrl={dummyUrl} />
      <CategoryCard title={'Pića'} imageUrl={dummyUrl} />
      <CategoryCard title={'Kafe'} imageUrl={dummyUrl} />
      <CategoryCard title={'Testing'} imageUrl={dummyUrl} />
      <CategoryCard title={'Testing'} imageUrl={dummyUrl} />
    </ScrollView>
  );
}
