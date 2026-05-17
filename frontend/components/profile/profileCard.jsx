import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function ProfileCard({ user }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.name}>
          {user.name}, {user.age}
        </Text>

        <Text style={styles.bio}>{user.bio}</Text>

        <View style={styles.interestsRow}>
          {user.interests.map((item) => (
            <View key={item} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width - 30,
    height: 650,
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: 15,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.20)",
  },

  name: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
  },

  bio: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
    lineHeight: 24,
  },

  interestsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },

  tag: {
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
  },

  tagText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
