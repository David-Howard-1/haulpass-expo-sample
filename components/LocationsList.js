import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
// import { locations } from './GetLocation';

const locationsTest = [
  {
    id: 1,
    latitude: 1,
    longitude: 2,
    logDate: new Date(),
  },
  {
    id: 2,
    latitude: 60,
    longitude: 20,
    logDate: new Date(),
  },
  {
    id: 3,
    latitude: 10,
    longitude: 20,
    logDate: new Date(),
  },
  {
    id: 4,
    latitude: 3,
    longitude: 4,
    logDate: new Date(),
  },
];

const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerLabel}>Latitude</Text>
      <Text style={styles.headerLabel}>Longitude</Text>
      <Text style={styles.headerLabel}>Timestamp</Text>
    </View>
  );
};

const Item = ({ latitude, longitude, timestamp }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{latitude}</Text>
      <Text style={styles.itemText}>{longitude}</Text>
      <Text style={styles.itemText}>{timestamp}</Text>
    </View>
  );
};

const LocationsList = ({ locations }) => {
  return (
    <View>
      <ListHeader />
      <FlatList
        data={locations}
        renderItem={({ item }) => {
          const { latitude, longitude, timestamp } = item.coords;

          const formatCoords = (coord) => {
            return Math.round(coord * 10000) / 10000;
          };

          return (
            <Item
              latitude={formatCoords(latitude)}
              longitude={formatCoords(longitude)}
              timestamp={timestamp}
            />
          );
        }}
        keyExtractor={(item) => locations.indexOf(item)}
      />
    </View>
  );
};

export default LocationsList;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: '',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 8,
  },
  headerLabel: {
    fontSize: 16,
    color: 'white',
    width: '33%',
    textAlign: 'center',
  },
  itemText: {
    fontSize: 16,
    width: '33%',
    textAlign: 'center',
    marginRight: 'auto',
  },
  itemContainer: {
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: '',
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
  },
});
