import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = () => {
    return(
        <View styles={styles.container}>
            <Text>
                Favorites
            </Text>
        </View>
    );
};

export default Favorites

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
})