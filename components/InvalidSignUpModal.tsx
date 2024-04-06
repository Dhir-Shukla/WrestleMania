import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type InvalidSignUpModalProps = {
    errorTxt: string
};

const InvalidSignUpModal = (props: InvalidSignUpModalProps) => {
    return (
        // <Modal 
        //     animationType="slide"
        //     transparent={true}>
        //     <View style={styles.modalContainer}>
        //         <Text>{props.errorTxt}</Text>
        //     </View>
        // </Modal>
            <View style={styles.container}>
                <Text style={styles.txt}>{props.errorTxt}</Text>
            </View>
    )
}

export default InvalidSignUpModal;

const styles = StyleSheet.create({
    modalContainer: {
        height: 50,
        top: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '8%',
        backgroundColor: '#fa5e5b',
        borderRadius: 10,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        zIndex: -1 
    },
    container: {
        height: 50,
        width: '80%',
        bottom: '18%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fa5e5b',
        borderRadius: 10,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    txt:{
        color: 'white'
    }
})