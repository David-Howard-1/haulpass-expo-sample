import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Info" onPress={() => navigation.navigate('Info')} />
    </View>
  );
};

export default Home;
