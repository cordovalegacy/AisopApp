
export const changeHandler = (fieldName:string, value:string, setter: (prevGetter: any) => void) => {
    setter((prevGetter:any) => ({
        ...prevGetter,
        [fieldName]: value
    }))
}