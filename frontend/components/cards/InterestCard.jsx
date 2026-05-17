import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function InterstCard({title , selected , onPress}) {
    return(
        <TouchableOpacity 
        style={[styles.card , selected  && styles.selected]}
        onPress={onPress}>
            <Text style={[styles.text , selected && styles.text]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    margin: 8,
  },
  selected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#111',
  },
  selectedText: {
    color: '#fff',
  },
})