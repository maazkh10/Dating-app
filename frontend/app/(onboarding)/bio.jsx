import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../../components/ui/AppButton";
import ScreenWrapper from "../../components/ui/Screen";

export default function BioScreen(params) {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.container}>Write YOur bio</Text>

        <TextInput
          multiline
          placeholder="Tell people about ur things"
          style={styles.container}
        />

        <CustomButton title="next" onPress={() => router.push("/photos")} />
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
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 20,
    height: 180,
    padding: 20,
    fontSize: 16,
    textAlignVertical: "top",
  },
});
