import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";

export default function CategoryModalScreen({navigation}) {

  const onEmptySpacePressed = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onEmptySpacePressed} style={styles.side}/>
      <View style={styles.nav}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  side: {
    width: '30%',
    height: '100%',
    backgroundColor: "#000000",
    opacity: 0.8
  },
  nav: {
    width: '70%',
    height: '100%',
    right: 0,
    backgroundColor: '#ffffff'
  }
})