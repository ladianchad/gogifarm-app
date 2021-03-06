import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
export default function BagScreen() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>장바구니</Text>
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
