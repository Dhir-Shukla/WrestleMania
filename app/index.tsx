
import UserInfo from '@/UserInfo'
import FightClubButton from '@/components/FightClubButton';
import FriendsButton from '@/components/FriendsButton';
import SettingsButton from '@/components/SettingsButton';
import { FontAwesome6 } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export default function HomeScreen() {

    const friendsButtonPressed = () => {
        console.warn('Friends Pressed')
    };

    const fightClubButtonPressed = () => {
        console.warn('Fight Club Pressed')
    };

    const settingsButtonPressed = () => {
        console.warn('Settings Pressed')
    };


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
                    <Text style={styles.username}>{UserInfo.UserName}</Text> 
                    <Image 
                        source={require('@/assets/images/fighter_ryu.png')}
                        style={styles.image}>
                    </Image>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.statsText}>Wins:  {UserInfo.Wins}</Text>
                    <Text style={styles.statsText}>Loss:  {UserInfo.Losses}</Text>
                    <Text style={styles.statsText}>K/O:  {UserInfo.KO}</Text>
                </View>
                
                <TextInput 
                    style={styles.textInput}
                    placeholder='  Enter fight location...'
                    placeholderTextColor='gray'
                />

                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.bottomButtonText}>Go    Location</Text>
                    <FontAwesome6 name='person-walking-arrow-right' size={20} color={UserInfo.secondaryColor} style={styles.bottomButtonIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.startFightButton}>
                    <Text style={styles.bottomButtonText}>Start  Fight</Text>
                    <FontAwesome6 name='pencil' size={20} color={UserInfo.secondaryColor} style={styles.bottomButtonIcon}/>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: UserInfo.primaryColor,
        flex: 1
    },
    topButton: {
        backgroundColor: UserInfo.thirdColor,
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
        backgroundColor: UserInfo.thirdColor,
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
    username: {
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
        color: UserInfo.secondaryColor,
        fontSize: 25,
        fontFamily: 'ARCADECLASSIC',
        shadowOpacity: 0.5
    },
    textInput: {
        top: 100,
        width: '60%',
        alignSelf: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'grey'
    },
    joinButton: {
        top: 120,
        backgroundColor: UserInfo.thirdColor,
        width: '80%',
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
        color: UserInfo.secondaryColor,
        fontSize: 20,
        fontFamily: 'ARCADECLASSIC'
    },
    startFightButton: {
        top: 180,
        backgroundColor: UserInfo.thirdColor,
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