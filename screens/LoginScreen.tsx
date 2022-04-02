import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../components/Themed";

export default function LoginScreen() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>테스트 로그인 페이지</Text>
    </SafeAreaView>
  )
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
