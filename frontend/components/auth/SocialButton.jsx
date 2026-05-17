import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function SocialButton({
  title,
  onPress,
  backgroundColor,
  color,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});