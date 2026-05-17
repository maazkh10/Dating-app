import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/ui/AppButton";
import CustomInput from "../../components/ui/AppInput";
import ScreenWrapper from "../../components/ui/Screen";

export default function OtpScreen() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Enter verification code</Text>

        <CustomInput placeholder="123456" value={otp} onChangeText={setOtp} />

        <CustomButton title="Verify" onPress={() => router.replace("/name")} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
});
