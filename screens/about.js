import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={globalStyles.titleText}>W1 - Friday Activity</Text>
            <Text></Text>
            <Text style={globalStyles.text}>Implement the below mentioned converters in Android Mobile App Devlopment.</Text>
            <Text></Text>
            <Text style={globalStyles.text}>1. Currency Converter app and used the current rates (as of today rates) for below mentioned conversions.</Text>
            <Text></Text>
            <Text style={globalStyles.text}>NZD --{'>'} AUD</Text>
            <Text style={globalStyles.text}>NZD --{'>'} USD</Text>
            <Text style={globalStyles.text}>AUD --{'>'} USD</Text>
            <Text style={globalStyles.text}>AUD --{'>'} NZD</Text>
            <Text style={globalStyles.text}>USD --{'>'} NZD</Text>
            <Text></Text>
            <Text style={globalStyles.text}>2. Temperature Converter app</Text>
            <Text></Text>
            <Text></Text>

            <Text style={globalStyles.text}>Created by: Marvin Coronel</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    }
});