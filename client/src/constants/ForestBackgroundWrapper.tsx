
// !Packages
import { ImageBackground, View } from 'react-native'
import { backgroundImages } from '../styles/global/backgroundImages'

const ForestBackgroundWrapper = ({ children }: ChildrenProps ) => {
    return (
        <View style={backgroundImages.screen}>
            <ImageBackground style={backgroundImages.base} source={require("../assets/layer-base.png")}>
                {children}
            </ImageBackground>
        </View>
    )
}

export default ForestBackgroundWrapper
