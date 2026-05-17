import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";


export default function IntroScreen(params) {
    return(
        <ImageBackground source={{
            uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        }} 
        style={styles.container}>

<StatusBar barStyle={"light-content"} />

<SafeAreaView style={styles.overlay}>

<View style = {styles.content}> 

<Text style={styles.logo}>DateItOut</Text>
<Text style={styles.tagline}>
            The dating app designed to be deleted.
          </Text>
</View>

<View style={styles.bottom}>
<TouchableOpacity  style={styles.button}
onPress={()=> router.push("/email")}>
    <Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>

<Text style={styles.footer}>
By tapping Continue you agree to our Terms
</Text>

</View>

</SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1
}, 
overlay:{
    flex : 1,
    backgroundColor : "rgba(0,0,0,0.35)",
    justifyContent: "space-between",
    paddingHorizontal : 24,
    paddingBottom : 40
},
content:{
    marginTop: 120
},
logo:{
    fontSize: 52,
    color: "#fff",
    fontWeight : "700",
    textTransform : "lowercase"
},
tagline:{
    color: "#fff",
    fontSize: 22,
    marginTop : 20,
    lineHeight : 32,
    width : "80%" ,
    fontWeight : "500"
}, 
bottom :{
    width : "100%"
},

button: {
    backgroundColor: "#7C3AED",
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  footer: {
    color: "#ddd",
    fontSize: 12,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 18,
  },

})