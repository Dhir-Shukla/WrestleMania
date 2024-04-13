import { Stack, router } from 'expo-router';
import { useState, useMemo } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import user from '@/User';

export default function loginScreen() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    user.primaryColor = useMemo(getScreenColor, []);

    function getScreenColor(): string {
        var colorList: string[] = ['#fa7a70', '#ebd5f7', '#e1f7d5', '#a9d3f7', '#a566e0'];     // TODO: Set this to retrieve all colors from a Model
        const hashedIndex = Math.floor(Math.random() * colorList.length)
        return colorList[hashedIndex];
    }

    function signUpPressed(): void {
        router.navigate('signUpScreen');
    }

    function handleLogin(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <View style = {[styles.container, {backgroundColor: user.primaryColor}]}>
            <Text style={styles.titleTxt}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Email:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Password:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity 
            style={styles.loginBtn}
            onPress={() => handleLogin()}>
                <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.signUpBtn}
            onPress={() => signUpPressed()}>
                <Text style={styles.signUpTxt}>
                    Sign up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titleTxt: {
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
    loginBtnTxt: {
        fontFamily: 'Organo', 
        color: 'grey'
    },
    signUpBtn: {
        marginTop: 70,
        width: 150,
        height: 30,
        borderRadius: 10,
        //shadowOpacity: 0.2,
        //shadowOffset: { width: 0, height: 2 },
        elevation: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'white',
    },
    signUpTxt: {
        fontFamily: 'Organo',
        color: 'white',
    }
})