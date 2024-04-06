import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import InvalidSignUpModal from '@/components/InvalidSignUpModal';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import { authService, db } from '@/backend/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useMemo } from 'react';

const signUpScreen = () => {

    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[shouldInvalidSignUpModalDisplay, setShouldInvalidSignUpModalDisplay] = useState(false);
    const[errorTxt, setErrorTxt] = useState('');
    

    const screenColor = useMemo(getScreenColor, []);

    function getScreenColor(): string {
        var colorList: string[] = ['#a566e0'];                              // TODO: Set this to retrieve all colors from firebase
        const hashedIndex = Math.floor(Math.random() * colorList.length)
        return colorList[hashedIndex];
    }
    
    function backToLoginScreen(): void {
        router.back();
    }

    function displayInvalidSignUpModal(errorTxt: string){
        setErrorTxt(errorTxt);
        setShouldInvalidSignUpModalDisplay(true);
        setTimeout(() => {
            setShouldInvalidSignUpModalDisplay(false);
        }, 3000);  
    }

    function handleCreateAccount(): void {
        if (email.length == 0){
            displayInvalidSignUpModal('Please enter an email');  
        }
        else if (username.length < 3){
            displayInvalidSignUpModal('Username must be at least 3 characters long');
        }
        else if (password.length < 6){
            displayInvalidSignUpModal('Password must be at least 6 characters long');
        }
        else if (false){                                                      // TODO: Create case where username already exists in database
            displayInvalidSignUpModal('This username already exists')
        }  
        else{
            // Create account in firebase authentication
            createUserWithEmailAndPassword(authService, email, password)
            .then(async (userCredentials) => {
                const user = userCredentials.user;
                console.warn('Account created with email', user.email);

                // Create user with their info in firestore db
                await setDoc(doc(db, "users", username), {
                    username: username,
                    password: password,
                    email: email,
                    color: '#fa7a70',
                    wins: 0,
                    loss: 0,
                    ko: 0
                }).then(() => {
                        console.warn('Document successfully written to firestore')
                }).catch((error) => {
                    displayInvalidSignUpModal('Error '+ error.code + ' : ' + error.message);
                    })
            })
            .catch((error) => {
                var errorCode = error.code;
                switch (errorCode) {
                    case 'auth/invalid-email':
                        displayInvalidSignUpModal('Invalid email');
                        break;
                    case 'auth/missing-password':
                        displayInvalidSignUpModal('Invalid Password');
                        break;
                    case 'auth/weak-password':
                        displayInvalidSignUpModal('Weak Password, 6 characters requried');
                        break;
                    default:
                        displayInvalidSignUpModal('Error '+ errorCode + ' : ' + error.message);
                        break;
                }                
            })
        }  
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
            {shouldInvalidSignUpModalDisplay && 
                    <InvalidSignUpModal errorTxt={errorTxt}/>
            }
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
        paddingLeft: 15,
        zIndex: 2
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