import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SplitTotal = ({splitTotal}) => {
    return(
      <View>
        <Text style={styles.Header}>Split total</Text>
        <Text style={styles.textOutput}>{SplitTotal}</Text>
      </View>  
    );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  textOutput: {
    fontSize: 30,
    color: '#ffffff',
  },
});

export default SplitTotal;
