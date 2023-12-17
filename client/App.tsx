
// !Packages
import { NavigationContainer } from '@react-navigation/native'
import { useUserStore } from './src/zustand/users/useUserStore'

// !Components
import AuthNavigator from './src/navigators/AuthNavigator'
import { StatusBar } from 'react-native'

const App = (): JSX.Element => {

  const { loggedInUser } = useUserStore()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#000025"}/>
      <AuthNavigator loggedInUser={loggedInUser} />
    </NavigationContainer>
  )
}

export default App
