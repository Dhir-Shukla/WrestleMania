import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export default function loginScreen() {

    const screenColor = getScreenColor();

    function getScreenColor(): string {
        var colorList: string[] = ['#fa7a70', '#ebd5f7', '#e1f7d5', '#a9d3f7', '#a566e0'];     // TODO: Set this to retrieve all colors from firebase
        const hashedIndex = Math.floor(Math.random() * colorList.length)
        return colorList[hashedIndex];
    }

    return (
        <View style = {[styles.container, {backgroundColor: screenColor}]}>
            <Text style={styles.loginTitleTxt}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Username: </Text>
                <TextInput style={styles.inputBox}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Password: </Text>
                <TextInput style={styles.inputBox}></TextInput>
            </View>
            <TouchableOpacity style={styles.loginBtn}><Text style={{fontFamily: 'Organo', color: 'grey'}}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.signUpBtn}><Text style={{fontFamily: 'Organo', color: 'grey'}}>Sign up</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    loginTitleTxt: {
        marginTop: 200,
        paddingBottom: 20,
        color: 'white',
        fontSize: 40,
        fontFamily: 'Organo'
    },
    inputContainer: {
        marginTop: 25,
    },
    inputTitleTxt: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Organo'
    },
    inputBox: {
        marginTop: 15,
        width: 250,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingLeft: 15
    },
    loginBtn: {
        marginTop: 35,
        width: 100,
        height: 30,
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    signUpBtn: {
        marginTop: 70,
        width: 150,
        height: 30,
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})