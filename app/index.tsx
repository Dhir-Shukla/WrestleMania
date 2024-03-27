import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import { Route } from "expo-router/build/Route";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";

const index = () => {
    // Creates an Animated Value that initializes with 0 and consistently updates the DOM accoridngly using useRef hook
    const fadeAnim = useRef(new Animated.Value(0)).current;

    function fadeIn() {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(({finished}) => {
            // If Animated start function recieves the finished property as true upon completion, call fadeOut after a second
            if (finished) {
                setTimeout(() => {
                    fadeOut();
                }, 300);
            }
        })
    };

    function fadeOut() {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            nextScreen();
        })
    };

    // useEffect hook calls when component mounts and also when it re-renders
    useEffect(() => {
        fadeIn()
    }, []);

    function nextScreen() {
        router.navigate('loginScreen')                        // TODO: Modify this to take the user to a screen based on their login status
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={styles.titleTxt}>D-MOBB</Text>
                <Text style={styles.titleTxt}>Games</Text>
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
    titleTxt: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Organo'
    }
})

export default index;