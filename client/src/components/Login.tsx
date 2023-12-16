
// !Packages
import { useState } from 'react'
import { login } from '../styles/auth/login'
import { screen } from '../styles/global/screen'
import { useUserStore } from "../zustand/users/useUserStore"
import { View, Text, SafeAreaView, TextInput, ScrollView, Pressable } from 'react-native'
import { changeHandler } from '../utils/helpers/inputChangeHandler'

const Login = () => {

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  })



  const { logInUser, loggedInUser } = useUserStore()
  {/* <Button title='Trigger The User Store - Zustand' onPress={triggerZustandStore} /> */ }
  const triggerZustandStore = () => {
    logInUser({
      gamer_tag: "new_gamer_tag",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      isAuthenticated: true
    })
  }

  return (
    <SafeAreaView style={[screen.fullScreen, login.center]}>
      <ScrollView style={screen.fullScreen} contentContainerStyle={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Text style={login.header}>WRITE YOUR OWN STORY</Text>
        <View style={login.form}>
          <View style={login.inputGroup}>
            <Text style={login.label}>Email</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("email", data, setLoginInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Password</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("password", data, setLoginInput)} />
          </View>
          <Pressable onPress={triggerZustandStore}>
            <View style={login.button}>
              <Text style={login.buttonText}>Sign In</Text>
            </View>
            </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login
