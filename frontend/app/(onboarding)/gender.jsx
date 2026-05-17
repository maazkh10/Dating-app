import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "../../components/ui/progressBar";
import ScreenWrapper from "../../components/ui/Screen";

export default function GenderScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ProgressBar progress={45} />

        <Text style={styles.title}>I am a</Text>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Man</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Woman</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Non Binary</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.next}
          onPress={() => router.push("/interests")}
        >
          <Text style={styles.nextText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#DDD",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
  },
  next: {
    backgroundColor: "#000",
    height: 58,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  nextText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
