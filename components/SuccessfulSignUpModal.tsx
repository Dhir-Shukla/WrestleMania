import {userService} from '@/config';
import { router } from 'expo-router';
import React, { useState } from "react";

import {View, Modal, StyleSheet, Text, TouchableOpacity} from "react-native";

type SuccessfulSignUpModalProps = {
    username: string,
    email: string,
    password: string
};

export default function SuccessfulSignUpModal(props: SuccessfulSignUpModalProps) {

    const [hasLoginFailed, SetHasLoginFailed] = useState(false);
    
    function loginBtnPressed() {
        // Log into firebase account using credentials
        userService.signIn(props.email, props.password)
        .then((errorMsg: any) => {
            // If successful then promise returns undefined errorMsg
            if (errorMsg){
                SetHasLoginFailed(true);
            }
            else{
                router.replace('/homeScreen');
            }
        })
    }

    function returnBtnPressed() {
        router.back();
    }

    return (
            <Modal animationType="fade"
                transparent={true}
                visible={true}
                >
                {!hasLoginFailed ? (
                    <View style={[styles.container, {backgroundColor: '#64c564'}]}>
                        <Text style={styles.titleTxt}>Congrats {props.username}!</Text>
                        <Text style={styles.subTxt}>Your account has been created with email:</Text>
                        <Text style={styles.emailTxt}>{props.email}</Text>
                        <TouchableOpacity 
                            style={[styles.loginBtn, {backgroundColor: '#4bb81c'}]}
                            onPress={loginBtnPressed}>
                            <Text style={styles.loginTxt}>Login</Text>
                        </TouchableOpacity>
                    </View>

                ): (
                    <View style={[styles.container, {backgroundColor: '#f76f6c'}]}> 
                        <Text style={styles.titleTxt}>Login Failed {':('}</Text>
                        <Text style={styles.subTxt}>Login failed for some unforseen reason.</Text>
                        <TouchableOpacity 
                            style={[styles.loginBtn, {backgroundColor: '#fa5e5b'}]}
                            onPress={returnBtnPressed}>
                            <Text style={styles.loginTxt}>Return to login</Text>
                        </TouchableOpacity>
                    </View>
                )}                
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '67%',
        marginBottom: '60%',
        marginHorizontal: '10%',
        alignItems: 'center',
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
    },
    titleTxt: {
        color: 'white',
        fontFamily: 'Organo',
        fontSize: 27,
        paddingTop: '25%'
    },
    subTxt: {
        color: 'black',
        fontFamily: 'Organo',
        fontSize: 18,
        paddingTop: '10%',
        paddingHorizontal: 10
    },
    emailTxt: {
        color: 'white',
        fontFamily: 'Organo',
        fontSize: 20,
        paddingTop: '10%',
        paddingHorizontal: 10
    },
    loginBtn: {
        marginTop: '15%',
        width: '70%',
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
    },
    loginTxt: {
        color: 'white',
        fontFamily: 'Organo',
        fontSize: 20
    }
})