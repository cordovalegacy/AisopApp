import { ViewStyle, TextStyle } from "react-native"
import { StyleSheet } from "react-native"

//=> styles/global/backgroundImages.ts
interface BackgroundImages {
    screen: ViewStyle,
    base: ViewStyle
}

export const backgroundImages: BackgroundImages = StyleSheet.create({
    screen: {
        flex: 1
    },
    base: {
        flex: 1
    }
})