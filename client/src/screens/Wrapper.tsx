
// !Packages
import { screen } from '../styles/global/screen'
import { SafeAreaView, StatusBar, View } from 'react-native'

// !Components
import App from '../../App'

const Wrapper = () => {
    return (
        <SafeAreaView style={screen.fullScreen}>
            <StatusBar backgroundColor={"#000041"} />
            <View style={screen.fullScreen}>
                <App />
            </View>
        </SafeAreaView>
    )
}

export default Wrapper
