import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const CHATS = [
  {
    id: 1,
    name: "Sophia",
    message: "Heyyyy 😄",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
  },
  {
    id: 2,
    name: "Emma",
    message: "When are we meeting?",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200",
  },
];

export default function ChatScreen(params) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container}>Messages</Text>

      <FlatList
        data={CHATS}
        keyExtractor={(itm) => itm.id.toString()}
        renderItem={({ itme }) => (
          <TouchableOpacity style={styles.container}>
            <Image source={{ uri: itme.image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{itme.name}</Text>
              <Text style={styles.message}>{itme.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 25,
  },

  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
  },

  message: {
    fontSize: 15,
    color: "#777",
    marginTop: 5,
  },
});
