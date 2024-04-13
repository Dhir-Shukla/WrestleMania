import user from "@/User";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";

const FightClubButton = () =>  {
    return (
        <View>
            <FontAwesome6
                name="users"
                size={30}
                color={user.secondaryColor}
            />
        </View>
    )
}

export default FightClubButton;