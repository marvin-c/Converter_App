import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const currencyPressed = () => {
        navigation.push('Curr_Converter');
    }
    const tempPressed = () => {
        navigation.push('Temp_Converter');
    }
    const aboutPressed = () => {
        navigation.push('About');
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.button}>
                <Button title='Currency Converter' onPress={currencyPressed} />
            </View>
            <View style={globalStyles.button}>
                <Button title='Temperature Converter' onPress={tempPressed} />
            </View>
            <View style={globalStyles.button}>
                <Button title='About' onPress={aboutPressed} />
            </View>

        </View>
    )
}
