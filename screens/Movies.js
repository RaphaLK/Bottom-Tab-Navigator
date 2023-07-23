import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Movies = () => {
    return(
        <View styles={styles.container}>
            <Text>
                Movies
            </Text>
        </View>
    );
};

export default Movies

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
})