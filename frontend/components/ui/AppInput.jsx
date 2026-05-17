import { StyleSheet, TextInput, View } from 'react-native';

import { COLORS } from '../../utils/constants';

export default function CustomInput({placeholder , value , onChageText}) {
    
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder={placeholder}
            value={value}
            onChange={onChageText}
            style={styles.input} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    marginTop: 20,
  },
  input: {
    height: 55,
    fontSize: 18,
    color: '#111',
  },
})