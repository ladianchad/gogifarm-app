import { getFocusedRouteNameFromRoute, useRoute } from "@react-navigation/native";
import { View, Text } from "../components/Themed";

export default function ProductScreen({navigation}) {

  const route = useRoute();
  
  return(
    <View>
      <Text>{route.name}</Text>
    </View>
  )
}