
// !Packages
import { Text, View } from 'react-native'
import { useUserStore } from '../../zustand/users/useUserStore'

const Home = () => {

  const { logInUser, loggedInUser } = useUserStore()

  return (
    <View>
        <Text>Hello {loggedInUser.email || "User"}</Text>
    </View>
  )
}

export default Home
