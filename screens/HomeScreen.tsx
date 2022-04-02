import { Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainHeader from '../components/MainHeader';
import ProductNavigator from '../components/ProductNavigator';

import { Text, View } from '../components/Themed';

export default function HomeScreen({navigation , route}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader navigation={navigation}/>
      <ProductNavigator navigation={navigation}/>
      <Text style={styles.mainText}>고기팜 메인 테스트 페이지.</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#ffffff'
  },
  mainText: {
    fontSize: 50
  }
});
