import UserInfo from "@/UserInfo";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";

const FightClubButton = () =>  {
    return (
        <View>
            <FontAwesome6
                name="users"
                size={30}
                color={UserInfo.secondaryColor}
            />
        </View>
    )
}

export default FightClubButton;