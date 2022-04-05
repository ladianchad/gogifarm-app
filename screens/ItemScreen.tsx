import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemList from "../components/item/ItemList";
import { View, Text } from "../components/Themed";

const ItemType = {
  cow: {
    name: "소고기"
  },
  pig: {
    name: "돼지고기"
  },
  chicken: {
    name: "닭·오리고기"
  },
  sheep: {
    name: "양고기"
  },
  gift: {
    name: "선물세트"
  },
  mealkit: {
    name: "밀키트"
  }
}
export default function ItemScreen({navigation , route}) {

  const [nav, setNav] = useState(null);
  const {itemType} = route.params;

  const onPressed = () => {
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }
  const onNavButtonPressed = () => {
    setNav(
      <HeaderNav onEptySpacePressed={()=> setNav(null)}></HeaderNav>
    )
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerBack} onPress={onPressed}>
          <Image width={26} height={26} source={require('../assets/images/back.png')} >
          </Image>
        </Pressable>
        <Text style={styles.headerText}>{ItemType[itemType].name}</Text>
        <Pressable style={styles.headerSimpleNav} onPress={onNavButtonPressed}></Pressable>
      </View>
      <ItemList headerComponent={null}></ItemList>
    </SafeAreaView>
  )
}

function HeaderNav({onEptySpacePressed}) {
  return (
    <View style={styles.headerNav}>
      <Pressable style={styles.headerNav} onPress={onEptySpacePressed}></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  header: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  headerBack: {
    width: 26,
    height: 26,
    marginHorizontal: 5
  },
  headerText: {
    fontSize: 17,
    fontWeight: '700',
    marginHorizontal: 5
  },
  headerSimpleNav: {
    width: 24,
    height: 24,
    backgroundColor: "#efefef",
    marginHorizontal: 10
  },
  headerNav: {
    width: '100%',
    height: '100%',
    backgroundColor: "#0f0f0f",
    opacity: 0.65,
  },
  text: {
    fontSize: 50
  }
})