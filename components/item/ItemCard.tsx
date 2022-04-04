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
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#040404",
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 40,
    color: "#fff"
  }
});