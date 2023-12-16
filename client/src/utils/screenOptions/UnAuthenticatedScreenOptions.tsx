
// !Packages
import { Platform } from "react-native";

export const screenOptions = {
tabBarItemStyle: {
    height: 100,
    paddingBottom: Platform.OS === "android" ? 35 : 40,
    paddingTop: Platform.OS === "android" ? 5 : 10,
    borderTopWidth: 2,
    borderTopColor: "#d9b945"
},
headerShown: false,
tabBarActiveTintColor: "#d9b945",
tabBarInactiveTintColor: "#ccc",
tabBarStyle: Platform.OS === "android" ? { height: 75 } : { height: 100 },
tabBarInactiveBackgroundColor: "#000010",
tabBarActiveBackgroundColor: "#000025"
}