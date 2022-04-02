import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";

export default function ProductScreen({navigation , route}) {

  const {itemType} = route.params;
  return(
    <View style={styles.container}>
      {renderByItemType(itemType)}
    </View>
  )
}

const renderByItemType =  (itemType) => {
  let name = "";
  switch (itemType) {
    case "cow":
      name = "소고기"
      break;
    case "pig":
      name = "돼지고기"
      break;
    case "chicken":
      name = "닭 오리고기"
      break;
    case "sheep":
      name = "양고기"
      break;
    case "gift":
      name  = "선물세트"
      break;
    case "mealkit":
      name = "밀키트"
      break;
    default:
      name = "404 not Found"
      break;
  }
  return(
    <Text style={styles.text}>{name}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  }
})