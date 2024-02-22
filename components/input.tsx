import { View, Text, TextInput, StyleSheet } from 'react-native';




function Input ({type, name}) {
    return (
        <View>
            <Text >{name}</Text>
            
            <TextInput placeholder={type ? 'Digite sua senha' : 'Digite seu email'} style={styles.input} />
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        marginTop: 39,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 20,
        height: 40,

        
    },


});
export default Input;
