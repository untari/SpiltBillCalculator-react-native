import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import SplitOut from './SplitOutput';

const Home = () => {
    const bill = '0.00';
    const tip = '10';
    const split = '2';
    const splitTotal = '0.00';
    
    const handleBillChange = (value) => {
        console.log(value);
    };
    const handleTipChange = (value) => {
        console.log(value);
    };
    const handleSplitAdd = () => {};
    const handleSplitRemove = () => {};
    
    return(
        <View style={styles.container}>
            <Input 
                label='Bill Total'
                amount={bill}
                placeHolderText='0.00'
                handleTextChane={handleBillChange}
            />
            <Input 
                label='Tip'
                amount={tip}
                placeHolderText='10'
                handleTextChane={handleTipChange}
            />
            <SplitOutput
                split={split}
                splitTotal={splitTotal}
                handleSplitAdd={handleSplitAdd}
                handleSplitRemove={handleSplitRemove}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop,
        paddingHorizontal: 30,
    },
});

export default Home;
