import user from "@/User";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";

const FriendsButton = () =>  {
    return (
        <View>
            <FontAwesome6
                name="user-ninja"
                size={30}
                color={user.secondaryColor}
            />
        </View>
    )
}

export default FriendsButton;