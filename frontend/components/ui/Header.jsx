import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


export default function Header({
    title , onBack
}) {
    return(
        <View style={styles.container}>
<TouchableOpacity 
 onPress={onBack}
>
    <Ionicons  name="arrow-back" size={26} color="#000"/>
</TouchableOpacity>

 <Text style={styles.title}> {title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});