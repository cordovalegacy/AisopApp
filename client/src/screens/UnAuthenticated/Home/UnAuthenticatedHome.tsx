
// !Packages
import { View, Text, Button, ImageBackground } from 'react-native'
import { useUserStore } from "../../../zustand/users/useUserStore"


// !Components
import Login from '../../../components/Login'
import Registration from '../../../components/Registration'
import { backgroundImages } from '../../../styles/global/backgroundImages'

const UnAuthenticatedHome = () => {

    const { logInUser, loggedInUser } = useUserStore()
    const triggerZustandStore = () => {
        logInUser({
            gamer_tag: "new_gamer_tag",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com"
        })
    }

    return (
        <View style={backgroundImages.screen}>
            <ImageBackground style={backgroundImages.base} source={require("../../../assets/layer-base.png")}>
                <Text>UnAuthenticated Home Page</Text>
                <Button title='Trigger The User Store - Zustand' onPress={triggerZustandStore} />
                <Login />
                <Registration />
            </ImageBackground>
        </View>
    )
}

export default UnAuthenticatedHome
