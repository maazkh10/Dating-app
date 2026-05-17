import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function ProfileScreen(params) {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Image 
                   source={{
            uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200',
          }}
          style={styles.image} />

          <View style={styles.content}>
          <Text style={styles.name}>Maaz, 24</Text>

          <Text style={styles.bio}>
            Software developer, gym lover and building cool startups 🚀
          </Text>

          <Text style={styles.section}>Interests</Text>

          <View style={styles.tags}>
            {['Coding', 'Gym', 'Coffee', 'Travel'].map((item) => (
              <View key={item} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
          </View>
           <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 500,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 36,
    fontWeight: '700',
  },

    bio: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    lineHeight: 24,
  },

  section: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 15,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
  },

  tagText: {
    fontSize: 15,
    fontWeight: '600',
  },

  editBtn: {
    backgroundColor: '#000',
    height: 58,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  editText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});