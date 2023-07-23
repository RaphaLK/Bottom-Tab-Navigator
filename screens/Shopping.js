import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Shopping = () => {
    return(
        <View styles={styles.container}>
            <Text>
                Shopping
            </Text>
        </View>
    );
};

export default Shopping

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
})