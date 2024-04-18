import { user } from '@/config';
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, Modal } from "react-native";

interface LockedCharacterProps {
    howToUnlock: string;
}

const LockedCharacter : React.FC<LockedCharacterProps> = ({ howToUnlock }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.lockedCharacterContainer}>

            <Pressable onPress={() => setModalVisible(true)}>
              <View style={styles.lockedImg}>
              <FontAwesome6 name='question' size={35} color='white'/>
              </View>
            </Pressable>
            <Text style={styles.characterName}>Locked</Text>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.modalTitle, {marginRight: 10}]}>Character</Text>
                        <Text style={styles.modalTitle}>Locked</Text>
                    </View>
                    <Text style={{color: 'white'}}>---------------------</Text>
                    <Text style={styles.modalText}>{howToUnlock}</Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </Modal> 
        </View>
    );
}

const styles = StyleSheet.create({
    lockedCharacterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        opacity: 0.9,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
      },
    lockedImg: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',      
        borderWidth: 0.5,
        borderColor: 'darkgrey',//UserInfo.secondaryColor,
        backgroundColor: 'grey',
        borderRadius: 5
      },
      characterName: {
        marginTop: 7,
        color: user.secondaryColor,
        fontFamily: 'ARCADECLASSIC',
        fontSize: 15
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '85%',
        marginHorizontal: '8%',
        backgroundColor: 'grey',
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
      },
      modalTitle: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'ARCADECLASSIC',
        shadowOpacity: 0.5
      },
      modalText: {
        top: 10,
        color: 'white',
        fontSize: 15,
        //fontFamily: 'ARCADECLASSIC',
        shadowOpacity: 0.5
      },
      button: {
        top: 25,
        borderRadius: 15,
        width: '40%',
        height: '20%',
        justifyContent: 'center',
        alignItems:'center',
        elevation: 2,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: 'lightgrey',
      },
      textStyle: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'ARCADECLASSIC'
      },
})

export default LockedCharacter;