import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = () => {
    return(
        <View styles={styles.container}>
            <Text>
                User
            </Text>
        </View>
    );
};

export default User

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
})