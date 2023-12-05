import { ViewStyle, TextStyle } from "react-native"
import { StyleSheet } from "react-native"

//=> styles/global/backgroundImages.ts
interface Screen {
    fullScreen: ViewStyle
}

export const screen: Screen = StyleSheet.create({
    fullScreen: {
        flex: 1
    }
})