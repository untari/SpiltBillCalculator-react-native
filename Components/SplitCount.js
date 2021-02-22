import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';


const SplitCount = ({ split, handleSplitAdd, handleSplitRemove }) => {
    return(
        <View>
            <Text style={styles.textHeader}>Split</Text>
            <View style={styles.tipSplitContainer}>
                <MaterialIcons 
                    style={style.icon}
                    name='add'
                    size={24}
                    onPress={handleSplitAdd}
                />
                <Text style={styles.splitInput}>{split}</Text>
                <MaterialIcons 
                    style={style.icon}
                    name='remove'
                    size={24}
                    onPress={handleSplitRemove}
                    disabled={split < 2}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18;
        color: 'fff',
        letterSpacing: 1.5,
    },
    tipSplitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: '#deddf2',
        borderRadius: 100,
    },
    splitInput: {
        paddingHorizontal: 10,
        fontSize: 30,
        color: '#fff',
    },
});

export default SplitCount;
