
//! Packages
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// !Components
import Home from "../components/Home"

// !Routing
const Tab = createBottomTabNavigator()

const AuthenticatedNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="AuthenticatedHome" component={Home} options={{
            title: "Home"
        }}/>
    </Tab.Navigator>
  )
}

export default AuthenticatedNavigator
