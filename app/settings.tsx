import user from '@/User';
import LockedCharacter from '@/components/LockedCharacter';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, View, Text, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router'

export default function SettingsScreen() {

    const characterImgs = [
      require('@/assets/images/fighter_default_face.png'),
      require('@/assets/images/fighter_female_face.png'),
      require('@/assets/images/fighter_chunky_face.png'),
      require('@/assets/images/fighter_ninja_face.png'),
    ];

    const [displayItemColor, setDisplayItemColor] = useState(user.primaryColor);
    const [displayItemImg, setDisplayItemImg] = useState(user.characterChoice);
    const [isPressed, setIsPressed] = useState(Array().fill(false));
    const [hasAudio, setHasAudio] = useState(user.audioChoice)

    const handlePressIn = (index: number) => {
      setIsPressed(prev => {
        const newIsPressed = [...prev];
        newIsPressed[index] = true;
        return newIsPressed;
      });
    };
  
    const handlePressOut = (index: number) => {
      setIsPressed(prev => {
        const newIsPressed = [...prev];
        newIsPressed[index] = false;
        return newIsPressed;
      });
    };

    function backBtnPressed() {
      router.back()
    }

    function saveBtnPressed() {
      console.warn('save button pressed')
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View 
          style={{
            backgroundColor: displayItemColor,
            borderColor: 'grey',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            top: 40,
            width: 100,
            height: 100,
            borderRadius: 10,
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 0 }
          }}
        >
                                                                          {/* TODO: Add Logoff if user is stored */}
        <Image
        source={characterImgs[displayItemImg]}
        style = {styles.displayImg}/>

        </View>

        <Text style={styles.theme}>Theme:</Text>

        <View style={styles.themeContainer}>
          <Pressable 
            onPressIn={() => handlePressIn(0)}
            onPressOut={() => handlePressOut(0)}
            onPress={() => setDisplayItemColor('#fa7a70')}
            style={[styles.themeButton, isPressed[0] && styles.buttonPressed, {backgroundColor: '#fa7a70'}]}
          />
          <Pressable 
            onPressIn={() => handlePressIn(1)}
            onPressOut={() => handlePressOut(1)}
            onPress={() => setDisplayItemColor('#ebd5f7')}
            style={[styles.themeButton, isPressed[1] && styles.buttonPressed, {backgroundColor: '#ebd5f7'}]}
          />
          <Pressable 
            onPressIn={() => handlePressIn(2)}
            onPressOut={() => handlePressOut(2)}
            onPress={() => setDisplayItemColor('#e1f7d5')}
            style={[styles.themeButton, isPressed[2] && styles.buttonPressed, {backgroundColor: '#e1f7d5'}]}
          />
          <Pressable 
            onPressIn={() => handlePressIn(3)}
            onPressOut={() => handlePressOut(3)}
            onPress={() => setDisplayItemColor('#a9d3f7')}
            style={[styles.themeButton, isPressed[3] && styles.buttonPressed, {backgroundColor: '#a9d3f7'}]}
          />
          <Pressable 
            onPressIn={() => handlePressIn(4)}
            onPressOut={() => handlePressOut(4)}
            onPress={() => setDisplayItemColor('black')}
            style={[styles.themeButton, isPressed[4] && styles.buttonPressed, {backgroundColor: 'black'}]}
          />
        </View>
        
        <Text style={styles.character}>Character:</Text>
        <View style={styles.characterContainer}>

          <View style={[styles.characterImgContainer, isPressed[5] && styles.buttonPressed]}>
            <Pressable
            onPressIn={() => handlePressIn(5)}
            onPressOut={() => handlePressOut(5)}
            onPress={() => setDisplayItemImg(0)}>
              <Image source={characterImgs[0]} style={styles.characterImg}></Image>
            </Pressable>
            <Text style={styles.characterName}>Ryu</Text>
          </View>

          {(user.wins > 2) ? (
            <View style={[styles.characterImgContainer, isPressed[6] && styles.buttonPressed]}>
            <Pressable
            onPressIn={() => handlePressIn(6)}
            onPressOut={() => handlePressOut(6)}
            onPress={() => setDisplayItemImg(1)}>
              <Image source={characterImgs[1]} style={styles.characterImg}></Image>
            </Pressable>
            <Text style={styles.characterName}>Lesly</Text>
          </View>
          ) : (
            <LockedCharacter howToUnlock='Win 3 fights'/>
          )}          

          {(user.ko > 0) ? (
            <View style={[styles.characterImgContainer, isPressed[7] && styles.buttonPressed]}>
            <Pressable
            onPressIn={() => handlePressIn(7)}
            onPressOut={() => handlePressOut(7)}
            onPress={() => setDisplayItemImg(2)}>
              <Image source={characterImgs[2]} style={styles.characterImg}></Image>
            </Pressable>
            <Text style={styles.characterName}>Chunky</Text>       
          </View>
          ) : (
              <LockedCharacter howToUnlock='Complete a K.O'/>
          )}
          
          {(user.wins >= 10 && user.wins > user.losses) ? (
            <View style={[styles.characterImgContainer, isPressed[8] && styles.buttonPressed]}>
            <Pressable
            onPressIn={() => handlePressIn(8)}
            onPressOut={() => handlePressOut(8)}
            onPress={() => setDisplayItemImg(3)}>
              <Image source={characterImgs[3]} style={styles.characterImg}></Image>
            </Pressable>
            <Text style={styles.characterName}>Silencer</Text>
          </View>
          ) : (
            <LockedCharacter howToUnlock='Win 10 games and keep wins > losses'/>
          )}
          
        </View>

        <TouchableOpacity 
        style={[styles.audioButton, {opacity: hasAudio ? 1 : 0.5}]}
        onPress={() => setHasAudio(!hasAudio)}>
          <Text style={styles.audioText}>Music</Text>
          {hasAudio ? (
            <FontAwesome6 name='volume-high' size={20} color='white'/>
          ) : (
            <FontAwesome6 name='volume-xmark' size={20} color='white'/>
          )}
        </TouchableOpacity>
        
        <View style={styles.bottomBtnsContainer}>
          <TouchableOpacity style={styles.cancelBtn} onPress={() => backBtnPressed()}>
            <FontAwesome6 name='arrow-left-long' size={22} color='white'/>
            <Text style={styles.cancelText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn} onPress={() => saveBtnPressed()}>
            <Text style={styles.saveText}>Save</Text>
            <FontAwesome6 name='check' size={22} color='white'/>
          </TouchableOpacity>
        </View>
        

        {/* <Text style={{marginTop: 20}}> Log off Button Here </Text>
        <Text style={{marginTop: 20}}> Save Button Here </Text> */}
  
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: user.primaryColor,
      flex: 1,
      //alignItems: 'center',
      paddingTop: 50,
      paddingLeft: '10%',
      paddingRight: '10%'
    },
    title: {
      alignSelf: 'center',
      fontSize: 30,
      fontFamily: 'ARCADECLASSIC',
      color: user.secondaryColor
    },
    displayImg: {
      width: 90,
      height: 90,
      marginLeft: 5,
      resizeMode: 'contain',
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 2 }
    },
    theme: {
      marginTop: 75,
      fontSize: 25,
      fontFamily: 'ARCADECLASSIC',
      color: user.secondaryColor
    },
    themeContainer: {
      marginTop: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    themeButton: {
      height: 50,
      width: 50,
      marginTop: 15,
      marginLeft: 20,
      borderRadius: 5,
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 2 } 
    },
    buttonPressed: {
      transform: [{ scale: 0.9 }],
      shadowOpacity: 0.1
    },
    character: {
      marginTop: 30,
      fontSize: 25,
      fontFamily: 'ARCADECLASSIC',
      color: user.secondaryColor
    },
    characterContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginLeft: 20
    },
    characterImgContainer: {
      alignItems: 'center',
      marginTop: 15,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
    },
    characterImg: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      
      borderWidth: 0.5,
      borderColor: 'darkgrey',//UserInfo.secondaryColor,
      borderRadius: 5
    },
    characterName: {
      marginTop: 7,
      color: user.secondaryColor,
      fontFamily: 'ARCADECLASSIC',
      fontSize: 15
    },
    audioButton: {
      top: 30,
      height: 30,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 2 },
      backgroundColor: '#f8c465',
      width: '50%',
      
      borderRadius: 20
    },
    audioText: {
      fontSize: 20,
      fontFamily: 'ARCADECLASSIC',
      color: 'white'
    },
    bottomBtnsContainer: {
      marginTop: 75,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cancelBtn: {
      backgroundColor: '#ff5d5d',
      height: 30,
      width: '40%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      shadowOpacity: 0.8,
      shadowOffset: { width: 0, height: 2 },
      borderRadius: 10
    },
    cancelText: {
      fontFamily: 'ARCADECLASSIC',
      color: 'white',
      fontSize: 22
    },
    saveBtn: {
      backgroundColor: '#64c564',
      height: 30,
      width: '40%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      shadowOpacity: 0.8,
      shadowOffset: { width: 0, height: 2 },
      borderRadius: 8

    },
    saveText: {
      fontFamily: 'ARCADECLASSIC',
      color: 'white',
      fontSize: 22
    }

  });