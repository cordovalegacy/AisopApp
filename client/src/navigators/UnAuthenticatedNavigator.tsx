
//! Packages
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// !Components
import Login from "../components/Login"
import Registration from "../components/Registration"
import ForestBackgroundWrapper from "../constants/ForestBackgroundWrapper"
import { screenOptions } from '../utils/screenOptions/UnAuthenticatedScreenOptions'

// !Routing
const Tab = createBottomTabNavigator()

const UnAuthenticatedNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
                let iconName = ""
                let size = 35
                if (route.name === 'Login') iconName = focused ? 'enter' : 'enter-outline'
                else if (route.name === 'Register') {
                    size = 30
                    iconName = focused ? 'person-add-outline' : 'person-add'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
            ...screenOptions
        })
        }>
            <Tab.Screen name="Login">
                {(props) => (
                    <ForestBackgroundWrapper>
                        <Login />
                    </ForestBackgroundWrapper>
                )}
            </Tab.Screen>
            <Tab.Screen name="Register">
                {(props) => (
                    <ForestBackgroundWrapper>
                        <Registration />
                    </ForestBackgroundWrapper>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default UnAuthenticatedNavigator
