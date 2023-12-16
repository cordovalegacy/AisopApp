
// !Packages
import { View, Text, ImageBackground } from 'react-native'
import { useUserStore } from "../../../zustand/users/useUserStore"

// !Components
import { backgroundImages } from '../../../styles/global/backgroundImages'

const AuthenticatedHome = () => {

    const { loggedInUser } = useUserStore()

    return (
        <View style={backgroundImages.screen}>
            <ImageBackground style={backgroundImages.base} source={require("../../../assets/layer-base.png")}>
                <Text>Authenticated Home Page</Text>
            </ImageBackground>
        </View>
    )
}

export default AuthenticatedHome
