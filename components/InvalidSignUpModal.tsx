import React from "react";
import { Modal, StyleSheet, Text, View} from "react-native";

type InvalidSignUpModalProps = {
    shouldDisplay: boolean
}

const InvalidSignUpModal = (props: InvalidSignUpModalProps) => {
    if (props.shouldDisplay == false) {return null};

    return (
        // <Modal
        // animationType="slide"
        // transparent={true}>
        //     <Text>Invalid sign up screen</Text>
        // </Modal>
        <View>
            <Text>Invalid</Text>
        </View>
    )
}

export default InvalidSignUpModal;

const styles = StyleSheet.create({

})