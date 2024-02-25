import UserInfo from "@/UserInfo";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";

const SettingsButton = () =>  {
    return (
        <View>
            <FontAwesome6
                name="gear"
                size={30}
                color={UserInfo.secondaryColor}
            />
        </View>
    )
}

export default SettingsButton;