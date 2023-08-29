import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from '../global/mapStyle';
import {colors} from '../global/styles';

const RestaurantsMapScreen = ({navigation}) => {
  const markers = [
    {
      id: 1,
      name: 'Comida Sanchez',
      coordinate: {latitude: 45.267136, longitude: 19.833549},
    },
    {
      id: 2,
      name: 'Marker 2',
      coordinate: {latitude: 45.267236, longitude: 19.843249},
    },
    {
      id: 3,
      name: 'Marker 3',
      coordinate: {latitude: 45.257236, longitude: 19.843249},
    },
    // ... add more markers
  ];

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerPress = marker => {
    setSelectedMarker(marker === selectedMarker ? null : marker);
  };
  return (
    <View>
      <HeaderHomeScreen iconLeft="menu" navigation={navigation} />
      <MapView
        style={{width: '100%', height: '100%'}}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: 45.267136,
          longitude: 19.833549,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1421,
        }}
        region={selectedMarker ? selectedMarker.coordinate : undefined}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.name}
            // You can use the image prop to set a custom marker icon
            image={require('../images/mapMarker.png')}
          />
        ))}
      </MapView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          alignSelf: 'center',
          padding: 10,
          backgroundColor: colors.SECONDARY_YELLOW,
        }}
        onPress={() => handleMarkerPress(markers[0])}>
        <Text style={{color: 'white'}}>Toggle Focus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantsMapScreen;
