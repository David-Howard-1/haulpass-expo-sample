import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import LocationsList from '../components/LocationsList';
import GetLocation from '../components/GetLocation';
import { useState } from 'react';

const RecentLocations = () => {
  const [locations, setLocations] = useState([]);

  const updateLocations = (newLocation) => {
    setLocations((prevLocations) => [...prevLocations, newLocation]);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity title="Info" onPress={() => navigation.navigate('Info')}>
        <Text>To Info</Text>
      </TouchableOpacity> */}
      <GetLocation onLocationChange={updateLocations} />
      <LocationsList locations={locations} />
    </View>
  );
};

export default RecentLocations;
