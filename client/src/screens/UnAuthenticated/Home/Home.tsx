
// !Packages
import { View, Text, Button } from 'react-native'
import { useUserStore } from "../../../zustand/users/useUserStore"

// !Components
import Login from '../../../components/Login'
import Registration from '../../../components/Registration'

const Home = () => {

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
        <View>
            <Text>UnAuthenticated Home Page</Text>
            <Button title='Trigger The User Store - Zustand' onPress={triggerZustandStore} />
            <Login />
            <Registration />
        </View>
    )
}

export default Home
