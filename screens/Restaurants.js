import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Restaurants = () => {
    return(
        <View styles={styles.container}>
            <Text>
                Foods
            </Text>
        </View>
    );
};

export default Restaurants

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
})