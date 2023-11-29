import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './styles';
import HomeScreen from './src/screens/home/screens';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}


export default App;