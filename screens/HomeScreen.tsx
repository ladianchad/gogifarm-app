import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
