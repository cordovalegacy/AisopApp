
// !Packages
import { NavigationContainer } from '@react-navigation/native'
import { useUserStore } from './src/zustand/users/useUserStore'

// !Components
import AuthNavigator from './src/navigators/AuthNavigator'

const App = (): JSX.Element => {

  const { loggedInUser } = useUserStore()

  return (
    <NavigationContainer>
      <AuthNavigator loggedInUser={loggedInUser} />
    </NavigationContainer>
  )
}

export default App
