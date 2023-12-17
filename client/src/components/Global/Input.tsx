
// !Packages
import { Text, TextInput, View } from "react-native"
import { changeHandler } from "../../utils/helpers/inputChangeHandler"
import { InputProps } from "../../types/global"

const Input = ({ viewStyle, textStyle, inputStyle, label, fieldName, setter, extraProps }: InputProps) => {
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{label}</Text>
            <TextInput style={inputStyle} onChangeText={(data) => changeHandler(fieldName, data, setter)} {...extraProps}/>
        </View>
    )
}

export default Input
