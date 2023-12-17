
// !Packages
import { Pressable } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useUserStore } from "../../zustand/users/useUserStore"

const Logout = () => {

    const { logOutUser } = useUserStore()

    return (
        <Pressable onPress={logOutUser}>
            <Ionicons
                name='log-out-outline'
                color={"#d9b945"}
                size={35}
                style={{ paddingHorizontal: 15 }}
            />
        </Pressable>
    )
}

export default Logout
