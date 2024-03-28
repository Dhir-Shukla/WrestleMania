import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";

const index = () => {
    // Creates an Animated Value that initializes with 0 and consistently updates the DOM accoridngly using useRef hook
    const dmobbTitleFadeAnim = useRef(new Animated.Value(0)).current;
    const gameTitleFadeAnim = useRef(new Animated.Value(0)).current;

    function fadeIn(titleAnim: Animated.Value, nextAnim?: () => void) {
        Animated.timing(titleAnim, {
            toValue: 1,
            duration: 700,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(({ finished }) => {
            // If Animated start function recieves the finished property as true upon completion, call fadeOut shortly after
            if (finished) {
                setTimeout(() => {
                    fadeOut(titleAnim, nextAnim);
                }, 500);
            }
        })
    };

    function fadeOut(titleAnim: Animated.Value, nextAnim?: () => void) {
        Animated.timing(titleAnim, {
            toValue: 0,
            duration: 700,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(({ finished }) => {
            if (finished) {
                if (nextAnim) {
                    nextAnim();
                }
                else {
                    nextScreen();
                }
            }
        })
    };

    // useEffect hook calls when component mounts and also when it re-renders
    useEffect(() => {
        fadeIn(dmobbTitleFadeAnim, () => fadeIn(gameTitleFadeAnim));
    }, []);

    function nextScreen() {
        router.navigate('loginScreen')                        // TODO: Modify this to take the user to a screen based on their login status
    }

    return (
        <View style={styles.container}>
                <Animated.View style={{ opacity: dmobbTitleFadeAnim }}>
                    <Text style={styles.dmobbTitleTxt}>D-MOBB</Text>
                    <Text style={styles.dmobbTitleTxt}>Games</Text>
                </Animated.View>
                <Animated.View style={{ opacity: gameTitleFadeAnim, position: 'absolute', alignSelf: 'center' }}>
                    <Text style={styles.gameTitleTxt}>WrestleMania</Text>
                </Animated.View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fa7a70'
    },
    txtContainer: {
        alignItems: 'center'
    },
    dmobbTitleTxt: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Organo'
    },
    gameTitleTxt: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'ARCADECLASSIC'
    }
})

export default index;