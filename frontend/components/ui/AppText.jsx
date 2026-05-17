import { Text, StyleSheet } from "react-native";

export default function AppText({
  children,
  style,
  numberOfLines,
}) {
  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 16,
  },
});