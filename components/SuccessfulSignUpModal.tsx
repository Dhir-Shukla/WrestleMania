import React from "react";

import {View, Modal, StyleSheet, Text, TouchableOpacity} from "react-native";

type SuccessfulSignUpModalProps = {
    username: string,
    email: string,
    password: string
};

export default function SuccessfulSignUpModal(props: SuccessfulSignUpModalProps) {
    
    function loginBtnPressed() {
        // Log into firebase account using credentials
        // If successful, navigate router
    }

    return (
            <Modal animationType="fade"
                transparent={true}
                visible={true}
                >
                <View style={styles.container}>
                    <Text style={styles.titleTxt}>Congrats {props.username}!</Text>
                    <Text style={styles.subTxt}>Your account has been created with email:</Text>
                    <Text style={styles.emailTxt}>{props.email}</Text>
                    <TouchableOpacity 
                        style={styles.loginBtn}
                        onPress={loginBtnPressed}>
                        <Text style={styles.loginTxt}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64c564',
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
        backgroundColor: '#4bb81c',
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