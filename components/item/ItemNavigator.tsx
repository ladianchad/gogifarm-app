import { Pressable, Image, StyleSheet } from "react-native"
import { View, Text } from "../Themed"

export default function ItemNavigator ({navigation, position}) {
  return (
    <View style={[styles.tabBar, {top: position}]}>
      <ItemNavigationItem navigation={navigation} itemType={"cow"} source={require('../../assets/images/animal/cow.png')} comment={'소고기'}></ItemNavigationItem>
      <ItemNavigationItem navigation={navigation} itemType={"pig"} source={require('../../assets/images/animal/pig.png')} comment={'돼지고기'}></ItemNavigationItem>
      <ItemNavigationItem navigation={navigation} itemType={"chicken"} source={require('../../assets/images/animal/chicken.png')} comment={'닭·오리고기'}></ItemNavigationItem>
      <ItemNavigationItem navigation={navigation} itemType={"sheep"} source={require('../../assets/images/animal/sheep.png')} comment={'양고기'}></ItemNavigationItem>
      <ItemNavigationItem navigation={navigation} itemType={"gift"} source={require('../../assets/images/animal/gift.png')} comment={'선물세트'}></ItemNavigationItem>
      <ItemNavigationItem navigation={navigation} itemType={"mealkit"} source={require('../../assets/images/animal/mealkit.png')} comment={'밀키트'}></ItemNavigationItem>
    </View>
  )
}

function ItemNavigationItem({navigation, itemType, source, comment}) {

  const onPressed = ()=>{
    navigation.navigate('Item', {
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
