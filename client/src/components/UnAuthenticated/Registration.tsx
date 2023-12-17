
// !Packages
import { useState } from 'react'
import { login } from '../../styles/auth/login'
import { screen } from '../../styles/global/screen'
import { useUserStore } from "../../zustand/users/useUserStore"
import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native'

// !Components
import Input from '../Global/Input'

const Registration = () => {

  const { logInUser, loggedInUser } = useUserStore()
  const triggerZustandStore = () => {
    logInUser({ ...registerInput, isAuthenticated: registerInput.confirm_password === registerInput.password && true })
  }
  const [registerInput, setRegisterInput] = useState({ ...loggedInUser, password: "", confirm_password: "" })

  return (
    <ScrollView style={screen.fullScreen} contentContainerStyle={{ alignItems: "center", justifyContent: "flex-start" }}>
      <Text style={[login.header, { marginTop: 20 }]}>START YOUR ADVENTURE</Text>
      <ScrollView style={[login.form, { paddingVertical: 20, height: (Dimensions.get("window").height / 1.22) }]}>
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='First Name' fieldName='firstName' setter={setRegisterInput} />
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Last Name' fieldName='lastName' setter={setRegisterInput} />
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Gamertag' fieldName='gamerTag' setter={setRegisterInput} />
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Email' fieldName='email' setter={setRegisterInput} />
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Date of Birth' fieldName='dob' setter={setRegisterInput} />
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Password' fieldName='password' setter={setRegisterInput}  extraProps={{secureTextEntry: true}}/>
        <Input viewStyle={login.inputGroup} textStyle={login.label} inputStyle={login.input} label='Confirm Password' fieldName='confirmPassword' setter={setRegisterInput} extraProps={{secureTextEntry: true}} />
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
