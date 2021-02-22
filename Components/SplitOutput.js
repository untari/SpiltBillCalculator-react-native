import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplitCount from './SplitCount';
import SplitTotal from './SplitTotal';

const SplitOutput = ({
    split,
    handleSplitAdd,
    handleSplitRemove,
    splitTotal,
}) => {
    return(
        <View>
            <SplitCount 
                split={split}
                handleSplitAdd={handleSplitAdd}
                handleSplitRemove={handleSplitRemove}
            />
            <splitTotal splitTotal={splitTotal} />
        </View>
    );
}
export default SplitOutput;
