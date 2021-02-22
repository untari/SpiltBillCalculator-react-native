import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const Input = ({ label, amount, placeholderText, handleTextChange }) => {
    return(
        <View  style={styles.Section}>
            <Text style={styles.titleText}>{label}</Text>
            <View style={styles.Container}>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder={placeholderText}
                    defaultValue={amount}
                    onChangeText={handleTextChange}
                />
                {label ==='Tip' ? <Text style={styles.textInput}>%</Text> : null}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    section: {
        padding: 10,
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
    titleText: {
        fontSize: 18,
        color: '#616161',
        letterSpacing: 1.5,
        
    },
    textInput: {
        fontSize: 30,
    },
});
export default Input;
