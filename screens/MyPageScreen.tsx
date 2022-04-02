import { View , Text } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function MyPageScreen() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>마이페이지</Text>
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
