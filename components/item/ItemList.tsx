import { FlatList, StyleSheet } from "react-native";
import { View } from "../Themed";
import ItemCard from "./ItemCard";

export default function ItemList({headerComponent}) {
  return(
    <View style={styles.container}>
      <FlatList
        data={[1,2,3,4,5,6,7]}
        renderItem={({item}) => (
          <ItemCard data={item}></ItemCard>
        )}
        keyExtractor={(data) => String(data)}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  }
})