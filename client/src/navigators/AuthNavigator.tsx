
// !Packages
import { createStackNavigator } from '@react-navigation/stack'

// !Components
import UnAuthenticatedNavigator from './UnAuthenticatedNavigator'
import AuthenticatedNavigator from './AuthenticatedNavigator'

// !Routing
const Stack = createStackNavigator()

// !Types
type AuthNavigatorProps = {
    loggedInUser: UserState['loggedInUser']
}

const AuthNavigator = ({ loggedInUser }: AuthNavigatorProps) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {
                !loggedInUser.isAuthenticated
                    ?
                    <Stack.Screen
                        name='Not Authenticated'
                        component={UnAuthenticatedNavigator}
                    />
                    :
                    <Stack.Screen
                        name='Authenticated'
                        component={AuthenticatedNavigator}
                    />
            }
        </Stack.Navigator>
    )
}

export default AuthNavigator
