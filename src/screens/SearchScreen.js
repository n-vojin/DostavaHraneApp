import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import SearchComponent from '../components/SearchComponent';
import {filterData} from '../global/Data';
import {colors} from '../global/styles';
import CategoryCardBig from '../components/CategoryCardBig';

export default function SearchScreen({navigation}) {
  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <SearchComponent />
      <View>
        <FlatList
          contentContainerStyle={{paddingBottom: 40}}
          style={styles.flatList}
          data={filterData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.imageAndTitleContainer}
              onPress={() => {
                //TODO DODAJ ON PRESS FUNKC
                navigation.navigate('SearchResultScreen', {item: item.name});
              }}>
              <Image
                style={styles.imageBig}
                resizeMode="cover"
                source={item.image}
              />

              <Text style={styles.textWhite}>{item.name}</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 180}}></View>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatList: {
    paddingBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textWhite: {
    color: colors.GHOST_WHITE,
    fontSize: 25,
    fontWeight: '500',
    position: 'absolute',
    marginTop: 130,
    marginLeft: 5,
    textShadowRadius: 8,
    textShadowColor: colors.black,
    backgroundColor: 'rgba(53, 54, 52, 0.5)',
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  imageBig: {
    width: 170,
    height: 170,
    borderRadius: 8,
  },
  imageAndTitleContainer: {
    margin: 8,
  },
});
