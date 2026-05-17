import { View , Text , StyleSheet } from "react-native";

import CustomButton from "../../components/ui/AppButton";
import CustomInput from "../../components/ui/AppInput";
import ScreenWrapper from "../../components/ui/Screen";

import ProgressBar from "../../components/ui/progressBar"
import { useState } from "react";
import { useRouter } from "expo-router";

export default function NameScreen() {
    const [name , setName] = useState("")
const router = useRouter() 

return(
    <ScreenWrapper >
        <View style={styles.constainer}>
            <ProgressBar progress={15} />
            <Text style={styles.title}>My first name</Text>

            <CustomInput
            placeholder="Maaz"
            value={name}
            onChageText={setName} 
            />

<CustomButton 
title="next"
onPress={()=>router.push("/birthday")} 
/>

        </View>
    </ScreenWrapper>
)
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding: 25,
        justifyContent: "center"
    },
    title:{
        fontSize: 34,
        fontWeight : "700",
        marginBottom: 10
    }
})