import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default function signUpScreen(){

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const screenColor = useMemo(getScreenColor, []);

    function getScreenColor(): string {
        var colorList: string[] = ['#a566e0'];     // TODO: Set this to retrieve all colors from firebase
        const hashedIndex = Math.floor(Math.random() * colorList.length)
        return colorList[hashedIndex];
    }
    
    function backToLoginScreen(): void {
        router.back();
    }

    function handleCreateAccount(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <View style = {[styles.container, {backgroundColor: screenColor}]}>
            <Text style={styles.titleTxt}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Email:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Username:</Text>
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
            style={styles.createAccountBtn}
            onPress={() => handleCreateAccount()}>
                <Text style={styles.createAccountBtnTxt}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.backToLoginBtn}
            onPress={() => backToLoginScreen()}>
                <FontAwesome6 name="arrow-left" size={15} color="white" />
                <Text style={styles.backToLoginTxt}>
                   Back to Login
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
        marginTop: 130,
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
    createAccountBtn: {
        marginTop: 50,
        width: 150,
        height: 30,
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#64c564',
    },
    createAccountBtnTxt: {
        fontFamily: 'Organo', 
        color: 'white'
    },
    backToLoginBtn: {
        marginTop: 70,
        width: 150,
        height: 30,
        borderRadius: 10,
        //shadowOpacity: 0.2,
        //shadowOffset: { width: 0, height: 2 },
        elevation: 2, 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
        //backgroundColor: 'white',
    },
    backToLoginTxt: {
        fontFamily: 'Organo',
        color: 'white',
    }
})