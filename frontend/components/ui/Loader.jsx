import {
    ActivityIndicator,
    StyleSheet,
    View,
} from "react-native";

export default function Loader() {
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#7C3ADE" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});