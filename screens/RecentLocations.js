import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import LocationsList from '../components/LocationsList';

const RecentLocations = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity title="Info" onPress={() => navigation.navigate('Info')}>
        <Text>To Info</Text>
      </TouchableOpacity> */}
      <LocationsList />
    </View>
  );
};

export default RecentLocations;
