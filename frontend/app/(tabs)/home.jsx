import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ProfileCard from "../../components/profile/profileCard";

const USERS = [
  {
    id: 1,
    name: "Sophia",
    age: 24,
    bio: "Coffee lover, gym addict, and sunset chaser ✨",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    interests: ["Travel", "Gym", "Coffee"],
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>hinge.</Text>

        <TouchableOpacity>
          <Ionicons name="filter" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <ProfileCard user={USERS[0]} />

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="close" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeBtn}>
          <Ionicons name="heart" size={34} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="star" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  logo: {
    fontSize: 34,
    fontWeight: "800",
    color: "#000",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },

  actionBtn: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 18,
  },

  likeBtn: {
    width: 78,
    height: 78,
    borderRadius: 45,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 18,
  },
});
