import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../styles';

export const locations = [];

export default function GetLocation({ onLocationChange }) {
  const [location, setLocation] = useState(null);

  const requestPermissionsSetLocation = async () => {
    console.log('Request Location Permissions and Setting Current Location...');
    const { status: foregroundStatus } =
      await Location.requestForegroundPermissionsAsync();
    if (foregroundStatus === 'granted') {
      const location = await Location.getCurrentPositionAsync();
      if (!location) {
        console.log('No location received');
        return;
      }
      console.log('Current location updated: ', location);
      const { latitude, longitude } = location.coords;
      setLocation(location);
      //   locations.push(location);
      onLocationChange(location);
    } else {
      console.log('Location permissions not granted');
    }
  };

  const getCurrentLocation = async () => {
    console.log('Fetching current location...');
    const { status: foregroundStatus } =
      await Location.getForegroundPermissionsAsync();
    if (foregroundStatus === 'granted') {
      const location = await Location.getCurrentPositionAsync();
      if (!location) {
        console.log('No location received');
        return;
      }
      const { latitude, longitude } = location.coords;
      setLocation(location);
      onLocationChange(location);
      console.log('Current location updated: ', location);
    } else {
      console.log('Location permissions not granted');
    }
  };

  return (
    <View>
      <View style={styles.containerButton}>
        <Button
          title="Enable Location Services"
          onPress={requestPermissionsSetLocation}
          style={{ marginVertical: 30 }}
          // endIcon={<Ionicons name="globe-outline" />}
        />
        <Ionicons name="globe-outline" size={25} color={colors.blue} />
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Update Location"
          onPress={getCurrentLocation}
          style={{ marginVertical: 30 }}
          // endIcon={<Ionicons name="globe-outline" />}
        />
        <Ionicons name="add-circle" size={25} color={colors.blue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
