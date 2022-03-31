import { Pressable, StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

export default function HomeScreen({navigation , route}) {
  const goNext = () => {
    navigation.navigate("Beef");
  }
  const goBack = () => {
    
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View
          style={{
            width: "100%",
            height: 99.5,
            flexDirection: 'row',
            padding: 16,
            borderWidth: 0,
          }}
        >
        <TobTabNavigationItem onPressed={()=>{navigation.navigate("Cow")}} source={require('../assets/images/animal/cow.png')} comment={'소고기'}></TobTabNavigationItem>
        <TobTabNavigationItem onPressed={()=>{navigation.navigate("Pig")}} source={require('../assets/images/animal/pig.png')} comment={'돼지고기'}></TobTabNavigationItem>
        <TobTabNavigationItem onPressed={()=>{navigation.navigate("Chichken")}} source={require('../assets/images/animal/chicken.png')} comment={'닭·오리고기'}></TobTabNavigationItem>
        <TobTabNavigationItem onPressed={()=>{navigation.navigate("Sheep")}} source={require('../assets/images/animal/sheep.png')} comment={'양고기'}></TobTabNavigationItem>
        <TobTabNavigationItem onPressed={()=>{navigation.navigate("Gift")}} source={require('../assets/images/animal/gift.png')} comment={'선물세트'}></TobTabNavigationItem>
        <TobTabNavigationItem onPressed={()=>{navigation.navigate("MealKit")}} source={require('../assets/images/animal/mealkit.png')} comment={'밀키트'}></TobTabNavigationItem>
      </View>
      <View>
        <Pressable onPress={goNext}>
          <Text style={styles.title}>Next</Text>
        </Pressable>
        <Pressable onPress={goBack}>
          <Text style={styles.title}>Before</Text>
        </Pressable>
      </View>
    </View>
  );
}

function TobTabNavigationItem({onPressed, source, comment}) {
  return(
    <Pressable
      style={{
        width: '16.666666%',
        padding: 0,
        display: 'flex',
      }}
      onPress={onPressed}>
      <View style={{
        alignItems: 'center'
      }}>
        <Image 
          style={{
            width: 34,
            height: 34
          }}
        source={source}
        ></Image>
        <Text>{comment}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
