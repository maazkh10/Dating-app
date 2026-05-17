import { StyleSheet, TextInput } from "react-native";

export default function OTPInput(props) {
    return(
        <TextInput 
        {...props}
keyboardType="number-pad"
maxLength={6}
style={styles.contaner}
/>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 18,
    textAlign: "center",
    fontSize: 22,
    letterSpacing: 10,
  },
});