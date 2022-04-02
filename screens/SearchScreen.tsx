import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SearchScreen() {
  return(
  <SafeAreaView style={styles.container}>
    <Text style={styles.mainText}>검색</Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  mainText: {
    fontSize: 50
  }
});
