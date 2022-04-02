import { Pressable, Image, StyleSheet } from "react-native"
import { View, Text } from "./Themed"

export default function ProductNavigator ({navigation}) {
  return (
    <View style={styles.tabBar}>
      <ProductNavigationItem navigation={navigation} itemType={"cow"} source={require('../assets/images/animal/cow.png')} comment={'소고기'}></ProductNavigationItem>
      <ProductNavigationItem navigation={navigation} itemType={"pig"} source={require('../assets/images/animal/pig.png')} comment={'돼지고기'}></ProductNavigationItem>
      <ProductNavigationItem navigation={navigation} itemType={"chicken"} source={require('../assets/images/animal/chicken.png')} comment={'닭·오리고기'}></ProductNavigationItem>
      <ProductNavigationItem navigation={navigation} itemType={"sheep"} source={require('../assets/images/animal/sheep.png')} comment={'양고기'}></ProductNavigationItem>
      <ProductNavigationItem navigation={navigation} itemType={"gift"} source={require('../assets/images/animal/gift.png')} comment={'선물세트'}></ProductNavigationItem>
      <ProductNavigationItem navigation={navigation} itemType={"mealkit"} source={require('../assets/images/animal/mealkit.png')} comment={'밀키트'}></ProductNavigationItem>
    </View>
  )
}

function ProductNavigationItem({navigation, itemType, source, comment}) {

  const onPressed = ()=>{
    navigation.navigate('Product', {
      itemType
    });
  }

  return(
    <Pressable
      style={styles.tab}
      onPress={onPressed}>
      <View style={{
        alignItems: 'center',
        width: '100%'
      }}>
        <Image 
          style={styles.tabIcon}
          source={source}
        ></Image>
        <Text style={styles.tabLabel}>{comment}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 99.5,
    flexDirection: 'row',
    padding: 16,
    borderWidth: 0,
  },
  tab: {
    width: '16.666666%',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 34,
    height: 34
  },
  tabLabel: {
    fontSize: 10
  }
});
