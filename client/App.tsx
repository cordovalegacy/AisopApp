
// !Packages
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useUserStore } from './src/zustand/users/useUserStore'

// !Components
import AuthenticatedHome from './src/screens/Authenticated/Home/AuthenticatedHome'
import UnAuthenticatedHome from './src/screens/UnAuthenticated/Home/UnAuthenticatedHome'

// !Routing
const Stack = createStackNavigator()

const App = (): JSX.Element => {

  const { loggedInUser } = useUserStore()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {
          loggedInUser.isAuthenticated
            ?
            <Stack.Screen
              name='UnAuthenticatedHome'
              component={UnAuthenticatedHome}
            />
            :
            <Stack.Screen
              name='AuthenticatedHome'
              component={AuthenticatedHome}
            />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
