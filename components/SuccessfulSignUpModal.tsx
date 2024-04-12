import React from "react";

import {View, Modal, StyleSheet, Text} from "react-native";

type SuccessfulSignUpModalProps = {
    username: string,
    email: string
};

export default function SuccessfulSignUpModal(props: SuccessfulSignUpModalProps) {
    return (
            <Modal animationType="slide"
                transparent={true}
                visible={true}
                >
                <View style={styles.container}>
                    <Text style={styles.titleTxt}>Congrats {props.username},</Text>
                    <Text style={styles.subTxt}>Your account has been created with email {props.email},</Text>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64c564',
        marginVertical: '60%',
        marginHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    titleTxt: {
        color: 'black',
        fontFamily: 'Organo',
        fontSize: 25
    },
    subTxt: {
        color: 'white',
        fontFamily: 'Organo',
        fontSize: 20
    }
})