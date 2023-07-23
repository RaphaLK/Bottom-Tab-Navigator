import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Events = () => {
    return(
        <View styles={styles.container}>
            <Text>
                Events
            </Text>
        </View>
    );
};

export default Events

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
})