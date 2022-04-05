import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";

export default function ItemCard({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>상품 번호 : {data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 227,
    marginHorizontal: "2.5%",
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#efefef",
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 40,
    color: "#fff"
  }
});