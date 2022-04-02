import { View } from "./Themed";
import { Image, Pressable, StyleSheet } from "react-native";

export default function MainHeader({navigation}) {
  return (
    <View style={styles.header}>
      <HeaderLogoImage navigation={navigation}/>
    </View>
  )
}

function HeaderLogoImage({navigation}) {
  return(
    <Pressable>
      <Image
       style={styles.logo}
       source={require('../assets/images/header-text-logo.png')}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#EB3300',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 220,
    height: 40
  }
})