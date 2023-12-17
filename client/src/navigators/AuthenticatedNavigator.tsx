
//! Packages
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { screenOptions } from '../utils/screenOptions/UnAuthenticatedScreenOptions'

// !Components
import Logout from '../components/Authenticated/Logout'
import Login from "../components/UnAuthenticated/Login"
import Registration from "../components/UnAuthenticated/Registration"
import ForestBackgroundWrapper from "../constants/ForestBackgroundWrapper"

// !Routing
const Tab = createBottomTabNavigator()

const UnAuthenticatedNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName = ""
        let size = 32
        if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline'
        else if (route.name === 'Profile') iconName = focused ? 'person-circle' : 'person-circle-outline'
        else if (route.name === 'Mail') iconName = focused ? 'mail-open' : 'mail'
        else if (route.name === 'About') iconName = focused ? 'information-circle' : 'information-circle-outline'
        else if (route.name === 'Adventure') {
          size = 40
          iconName = focused ? 'bonfire' : 'bonfire-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      ...screenOptions,
      headerStyle: { backgroundColor: "#000010", borderBottomWidth: 2, borderBottomColor: "#d9b945" },
      headerTintColor: "#d9b945",
      headerShown: route.name === "Adventure"
        ? false
        : true,
      headerRight: () => (
        <Logout />
      )
    })
    }>
      <Tab.Screen name="Home">
        {(props) => (
          <ForestBackgroundWrapper>
            <Login />
          </ForestBackgroundWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => (
          <ForestBackgroundWrapper>
            <Registration />
          </ForestBackgroundWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="Adventure">
        {(props) => (
          <ForestBackgroundWrapper>
            <Registration />
          </ForestBackgroundWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="About">
        {(props) => (
          <ForestBackgroundWrapper>
            <Registration />
          </ForestBackgroundWrapper>
        )}
      </Tab.Screen>
      <Tab.Screen name="Mail">
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
