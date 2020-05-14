import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from "../constants/Colors";

const FallbackText = props => {
    return <Text style={styles.text}>{props.children}</Text>
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: Colors.primaryColor,
        textAlign: 'center'
    },

});

export default FallbackText;