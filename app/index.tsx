
import UserInfo from '@/UserInfo'
import FightClubButton from '@/components/FightClubButton';
import FriendsButton from '@/components/FriendsButton';
import SettingsButton from '@/components/SettingsButton';
import { FontAwesome6 } from '@expo/vector-icons';
import { Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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

            <TouchableOpacity style={[styles.topButton, styles.friends]} onPress={friendsButtonPressed} >
                <FriendsButton />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topButton, styles.fightClub]} onPress={fightClubButtonPressed}>
                <FightClubButton />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.settings} onPress={settingsButtonPressed}>
                <SettingsButton />
            </TouchableOpacity>            

            
            {/* <Text style={{color: 'white'}}>Club</Text>
            <Text style={{color: 'white'}}>Image</Text>
            <Text style={{color: 'black'}}>Score goes here</Text>
            <Text style={{color: 'black'}}>Join game</Text>
            <Text style={{color: 'black'}}>Create game</Text> */} 
            
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
    }
})