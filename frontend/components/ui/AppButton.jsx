import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { COLORS } from '../../utils/constants';

export default function CustomButton({title  , onPress}) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    button:{
        backgroundColor : COLORS.primary,
        height : 58,
        borderRadius : 40,
        justifyContent : "center",
        alignItems : "center",
        width : "100%",
        marginTop : 20 ,
    },
    text : {
        color : "#fff",
        fontSize : 18,
        fontWeight: "600"
    }
})