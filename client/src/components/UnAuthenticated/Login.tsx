
// !Packages
import { useState } from 'react'
import { login } from '../../styles/auth/login'
import { screen } from '../../styles/global/screen'
import { useUserStore } from "../../zustand/users/useUserStore"
import { View, Text, ScrollView, Pressable } from 'react-native'

// !Components
import Input from '../Global/Input'

const Login = () => {

  const { logInUser, loggedInUser } = useUserStore()
  const triggerZustandStore = () => {
    logInUser({ ...loginInput, isAuthenticated: true })
  }
  const [loginInput, setLoginInput] = useState({ ...loggedInUser, password: "" })

  return (
    <ScrollView style={screen.fullScreen} contentContainerStyle={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <Text style={login.header}>WRITE YOUR OWN STORY</Text>
      <View style={login.form}>
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Email' fieldName='email' setter={setLoginInput} />
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Password' fieldName='password' setter={setLoginInput} extraProps={{ secureTextEntry: true }} />
        <Pressable onPress={triggerZustandStore}>
          <View style={login.button}>
            <Text style={login.buttonText}>Sign In</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Login
