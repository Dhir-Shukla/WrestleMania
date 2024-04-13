
import user from '@/User'
import FightClubButton from '@/components/FightClubButton';
import FriendsButton from '@/components/FriendsButton';
import SettingsButton from '@/components/SettingsButton';
import { FontAwesome6 } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function HomeScreen() {

    const characterImgs = [
        require('@/assets/images/fighter_default.png'),
        require('@/assets/images/fighter_chunky.png'),
        require('@/assets/images/fighter_female.png'),
        require('@/assets/images/fighter_ninja.png')
    ];
    
    const [location, setLocation] = useState('');

    const friendsButtonPressed = () => {
        console.warn('Friends Pressed')
    };

    const fightClubButtonPressed = () => {
        console.warn('Fight Club Pressed')
    };

    function settingsButtonPressed(): void {
        router.navigate('settings')
    };

    function joinButtonPressed(): void {
        console.warn('Joining', location)
    };

    function startFightButtonPressed(): void {
        console.warn('Start Fight Button Pressed')
    }

    return (
        <View style={styles.screen}>
            <KeyboardAwareScrollView>

                <TouchableOpacity style={[styles.topButton, styles.friends]} onPress={friendsButtonPressed} >
                    <FriendsButton />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.topButton, styles.fightClub]} onPress={fightClubButtonPressed}>
                    <FightClubButton />  
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings} onPress={settingsButtonPressed}>
                    <SettingsButton />
                </TouchableOpacity>

                <View style={styles.imageContainer}>
                    <Text style={styles.username}>{user.username}</Text> 
                    <Image 
                        source={characterImgs[user.characterChoice]}
                        style={styles.image}>
                    </Image>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.statsText}>Wins:  {user.wins}</Text>
                    <Text style={styles.statsText}>Loss:  {user.losses}</Text>
                    <Text style={styles.statsText}>K/O:  {user.ko}</Text>
                </View>
                
                <TextInput 
                    style={styles.textInput}
                    placeholder='Fight location...'
                    placeholderTextColor='gray'
                    onChangeText={(text)=>setLocation(text)}
                /> 

                <TouchableOpacity style={styles.joinButton} onPress={joinButtonPressed}>
                    <Text style={styles.bottomButtonText}>Join</Text>
                    <FontAwesome6 name='person-walking-arrow-right' size={20} color={'white'} style={styles.bottomButtonIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.startFightButton} onPress={startFightButtonPressed}>
                    <Text style={styles.bottomButtonText}>Start  Fight</Text>
                    <FontAwesome6 name='pencil' size={20} color={user.secondaryColor} style={styles.bottomButtonIcon}/>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: user.primaryColor,
        flex: 1
    },
    topButton: {
        backgroundColor: user.thirdColor,
        width: 60,
        height:60,
        borderRadius: 30,
        shadowOpacity: 0.2,
        //shadowOffset: {width: 0, height: 2},
        justifyContent: 'center',
        alignItems: 'center'
    },
    friends: {
        top: 60,
        left: 15
    },
    fightClub: {
        top: 0,
        left: 90
    },
    settings: {
        position: 'absolute',
        flexDirection: 'row-reverse',
        backgroundColor: user.thirdColor,
        width: 50,
        height:50,
        borderRadius: 25,
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        top: 65,
        right: 15
    },
    imageContainer: {
        alignItems: 'center',
        top: 25
    },
    username: {                                         // TODO: Adjust username tag color to white if background is dark
        fontSize: 30,
        fontFamily: 'ARCADECLASSIC',
        shadowOpacity: 0.1
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginTop: 10,
        shadowOpacity: 0.2
        
    },
    statsContainer: {
        top: 65,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    statsText: {
        color: user.secondaryColor,
        fontSize: 25,
        fontFamily: 'ARCADECLASSIC',
        shadowOpacity: 0.5
    },
    textInput: {
        top: 120,
        width: '60%',
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'black'
    },
    joinButton: {
        top: 140,
        backgroundColor: '#64c564',
        width: '30%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        borderRadius: 10
    },
    bottomButtonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'ARCADECLASSIC'
    },
    startFightButton: {
        top: 200,
        backgroundColor: user.thirdColor,   //Light Blue:'#a9d3f7' //Light red:'#ff4b4b' //Light Purple:'#ebd5f7' //Light Green:'#e1f7d5'
        width: '60%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOpacity: 0.7,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        borderRadius: 10,
    },
    bottomButtonIcon: {
        left: 12,
        fontFamily: 'ARCADECLASSIC'
    }
})