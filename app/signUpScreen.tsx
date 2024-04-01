import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import InvalidSignUpModal from '@/components/InvalidSignUpModal';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { authService, db } from '@/backend/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useMemo } from 'react';

const signUpScreen = () => {

    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[shouldInvalidSignUpModalDisplay, setShouldInvalidSignUpModalDisplay] = useState(false);

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
        // Create account in firebase authentication
        createUserWithEmailAndPassword(authService, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.warn('Account created with email', user.email);

                // Create user with their info in firestore db
                setDoc(doc(db, "users", username), {
                    username: username,
                    password: password,
                    email: email,
                    color: '#fa7a70',
                    wins: 0,
                    loss: 0,
                    ko: 0
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                switch (errorCode) {
                    case 'auth/invalid-email':
                        setShouldInvalidSignUpModalDisplay(true);
                        console.warn('Invalid email')
                        break;
                    case 'auth/missing-password':
                        setShouldInvalidSignUpModalDisplay(true);
                        console.warn('Invalid Password')
                        break;
                    case 'auth/weak-password':
                        setShouldInvalidSignUpModalDisplay(true);
                        console.warn('Weak Password, 6 characters requried')
                        break;
                    default:
                        console.warn('Error code:', errorCode),
                        console.warn('Error type:', typeof(errorCode)),
                        console.warn('Error message:', errorMessage)
                        break;
                }                
            })            
    }

    return (
        <View style = {[styles.container, {backgroundColor: screenColor}]}>
            <Text style={styles.titleTxt}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitleTxt}>Email:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => setEmail(text)}
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
            <InvalidSignUpModal shouldDisplay={shouldInvalidSignUpModalDisplay}/>
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

export default signUpScreen;