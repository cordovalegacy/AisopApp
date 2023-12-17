
// !Types
import { TextStyle, ViewStyle } from "react-native"

type ChildrenProps = {
    children: React.ReactNode
}

type InputProps = {
    viewStyle: ViewStyle
    textStyle: TextStyle
    inputStyle: any
    label: string
    fieldName: string
    setter: (value: any) => void 
    extraProps?: any
}