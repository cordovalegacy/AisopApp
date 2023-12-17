
// !Packages
import { useState } from 'react'
import { login } from '../styles/auth/login'
import { screen } from '../styles/global/screen'
import { useUserStore } from "../zustand/users/useUserStore"
import { changeHandler } from '../utils/helpers/inputChangeHandler'
import { View, Text, SafeAreaView, TextInput, ScrollView, Pressable, Dimensions } from 'react-native'

const Registration = () => {

  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gamerTag: "",
    dob: "",
    password: "",
    confirmPassword: ""
  })



  const { logInUser, loggedInUser } = useUserStore()
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
      <ScrollView style={screen.fullScreen} contentContainerStyle={{ alignItems: "center", justifyContent: "flex-start" }}>
        <Text style={[login.header, {marginTop: 20}]}>START YOUR STORY</Text>
        <ScrollView style={[login.form, {paddingVertical: 20, height: (Dimensions.get("window").height / 1.20)}]}>
          <View style={login.inputGroup}>
            <Text style={login.label}>First Name</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("firstName", data, setRegisterInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Last Name</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("lastName", data, setRegisterInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Email</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("email", data, setRegisterInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Gamertag</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("gamerTag", data, setRegisterInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Date of Birth</Text>
            <TextInput style={login.input} onChangeText={(data) => changeHandler("dob", data, setRegisterInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Password</Text>
            <TextInput secureTextEntry style={login.input} onChangeText={(data) => changeHandler("password", data, setRegisterInput)} />
          </View>
          <View style={login.inputGroup}>
            <Text style={login.label}>Confirm Password</Text>
            <TextInput secureTextEntry style={login.input} onChangeText={(data) => changeHandler("confirmPassword", data, setRegisterInput)} />
          </View>
          <Pressable onPress={triggerZustandStore}>
            <View style={login.button}>
              <Text style={login.buttonText}>Register</Text>
            </View>
            </Pressable>
        </ScrollView>
      </ScrollView>
  )
}

export default Registration
