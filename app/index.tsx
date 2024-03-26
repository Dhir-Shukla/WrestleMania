import { StyleSheet, Text, View, Image } from "react-native";

const index = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={require('@/assets/images/D-MOBB_Gaming_Bg.jpeg')}
            style={styles.img}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        
    }
})

export default index;