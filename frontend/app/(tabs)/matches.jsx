import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DATA = [
    {
    id: 1,
    name: 'Emma',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200',
  },
  {
    id: 2,
    name: 'Olivia',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200',
  },
]

export default function MatchScreen(params) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Your Matches</Text>
        
        <FlatList 
        data={DATA}
        numColumns={2}
        keyExtractor={(itm) => itm.id.toString()}
        renderItem={({itme}) =>(
            <View style={styles.card}>
<Image source={{uri : itme.image}}
style={styles.image} />
   <Text style={styles.name}>{item.name}</Text>
            </View>
        )}
        />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        padding: 20
    },
    title: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 20,
  },

  card: {
    width: '48%',
    marginBottom: 15,
    marginRight: '4%',
},

image:{
    width: "100%",
    height: 250,
    borderRadius: 25
},
name:{fontSize: 18,
    fontWeight: '600',
    marginTop: 10,}
})