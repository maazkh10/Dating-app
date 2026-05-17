import { StyleSheet, View } from "react-native";

import { COLORS } from "../../utils/constants";

export default function ProgressBar({progress}) {
    return(
        <View style={styles.container}>
            <View style={[styles.fill , {width : `${progress}`}]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 6,
        backgroundColor: '#EAEAEA',
        overflow : 'hidden',
        borderRadius: 10,
        marginBottom : 30
    }
    ,
    fill:{
        height : "100%" , 
        backgroundColor : COLORS.secondary,
    }
})