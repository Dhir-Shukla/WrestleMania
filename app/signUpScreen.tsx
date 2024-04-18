import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import InvalidSignUpModal from '@/components/InvalidSignUpModal';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import { useState } from 'react';
import SuccessfulSignUpModal from '@/components/SuccessfulSignUpModal';
import {user, userService} from '@/config';

const signUpScreen = () => {
    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[shouldDisplayInvalidSignUpModal, setShouldDisplayInvalidSignUpModal] = useState(false);
    const[shouldDisplaySuccessfulModal, setShouldDisplaySuccessfulModal] = useState(false);
    const[shouldDisplayloadingIcon, setShouldDisplayLoadingIcon] = useState(false);
    const[shouldDisplayCreateAccountBtn, setShouldDisplayCreateAccountBtn] = useState(true);
    const[errorTxt, setErrorTxt] = useState('');
    
    function backToLoginScreen(): void {
        router.back();
    }

    function displayInvalidSignUpModal(errorTxt: string){
        setErrorTxt(errorTxt);
        setShouldDisplayInvalidSignUpModal(true);
        setTimeout(() => {
            setShouldDisplayInvalidSignUpModal(false);
        }, 3000);  
    }

    function displayLoadingIcon(){
        setShouldDisplayLoadingIcon(true);
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
            setShouldDisplayLoadingIcon(true);
            setShouldDisplayCreateAccountBtn(false);
            userService.createAccount(username, email, password)
                .then((errorMsg) => {
                    // Request completed and promise returned, so hide loading icon
                    setShouldDisplayLoadingIcon(false);
                    if (errorMsg){
                        setShouldDisplayCreateAccountBtn(true);
                        displayInvalidSignUpModal(errorMsg!);
                    }
                    else{
                        setShouldDisplaySuccessfulModal(true);
                    }
                })
        }  
    }

    return (
        <View style = {[styles.container, {backgroundColor: user.primaryColor}]}>
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

            {shouldDisplayCreateAccountBtn &&     
                <TouchableOpacity 
                style={styles.createAccountBtn}
                onPress={() => handleCreateAccount()}>
                    <Text style={styles.createAccountBtnTxt}>Create Account</Text>
                </TouchableOpacity>
            }    

            {shouldDisplayloadingIcon && 
                <ActivityIndicator style={styles.loadingIcon} size={"large"} color={"#64c564"}/>
            }   

            <TouchableOpacity 
            style={styles.backToLoginBtn}
            onPress={() => backToLoginScreen()}>
                <FontAwesome6 name="arrow-left" size={15} color="white" />
                <Text style={styles.backToLoginTxt}>
                   Back to Login
                </Text>
            </TouchableOpacity>

            {shouldDisplayInvalidSignUpModal && 
                <InvalidSignUpModal errorTxt={errorTxt}/>
            }

            {shouldDisplaySuccessfulModal && 
                <SuccessfulSignUpModal username={username} email={email} password={password}/>
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
    loadingIcon: {
        marginTop: 44
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