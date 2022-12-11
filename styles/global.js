import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleText: {
        fontSize: 18,
        color: '#333',

        paddingTop: 60,
    },
    button: {
         width: 250,
         height: 100,
    },
    text: {
        fontSize: 11,
    },
    created: {
        fontSize: 8,
    },
    temp: {
        fontSize: 11,
    },
    input: {
        width: 100,
        height: 20,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 11,
        textAlign:  'center',
      },
})
