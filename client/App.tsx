/**
 * @format
 */

// !Packages
import { SafeAreaView, StatusBar, Text, View } from 'react-native'

// !Components
import Home from './src/screens/UnAuthenticated/Home/Home'

const App = (): JSX.Element => {

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"#000041"}/>
      <View>
        <Text>Hello App</Text>
        <Home />
      </View>
    </SafeAreaView>
  )
}

export default App
