import { Text, View, Button } from 'react-native';
import { styles } from '../styles';

const Info = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
      <Button title='Recents' onPress={() => navigation.navigate('Recents')} />
    </View>
  );
};

export default Info;
