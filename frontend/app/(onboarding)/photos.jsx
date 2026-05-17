import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/ui/AppButton";
import ScreenWrapper from "../../components/ui/Screen";
import ProgressBar from "../../components/ui/progressBar";

export default function PhotosScreen(params) {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ProgressBar progress={100} />
        <Text style={styles.title}>Add your photos</Text>

        <View style={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((itm) => (
            <TouchableOpacity key={itm} style={styles.photosCard}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton title="Save" onPress={() => router.push("/home")} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  photosCard: {
    width: "48%",
    height: 180,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  plus: {
    fontSize: 42,
    color: "#888",
  },
});
