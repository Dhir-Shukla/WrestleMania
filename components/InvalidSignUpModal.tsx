import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text} from "react-native";

type InvalidSignUpModalProps = {
    errorTxt: string
};

const InvalidSignUpModal = (props: InvalidSignUpModalProps) => {
    const posAnim = useRef(new Animated.Value(0)).current;

    function moveLeft(movedCount: number){
        Animated.timing(posAnim, {
            toValue: 10,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(({ finished }) => {
            if (finished) {
                movedCount++
                if (movedCount < 4){
                    moveRight(movedCount)
                }
                else{
                    moveCenter()
                }
            }
        })
    }

    function moveRight(movedCount: number){
        Animated.timing(posAnim, {
            toValue: -10,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(({ finished }) => {
            if (finished) {
                movedCount++
                if (movedCount < 4){
                    moveLeft(movedCount)
                }
                else{
                    moveCenter()
                }
            }
        })
    }

    function moveCenter(){
        Animated.timing(posAnim, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        moveLeft(0);
    }, []);

    return (
            <Animated.View style={[styles.container, {transform: [{translateX: posAnim}]}]}>
                <Text style={styles.txt}>{props.errorTxt}</Text>
            </Animated.View>
    )
}

export default InvalidSignUpModal;

const styles = StyleSheet.create({
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
        color: 'white',
        fontFamily: 'Organo'
    }
})