import { create } from "zustand"

export const useUserStore = create<UserState>((set) => ({
    loggedInUser: {
        gamer_tag: "",
        first_name: "",
        last_name: "",
        email: "",
        isAuthenticated: false
    },
    logInUser: (userData:any) => {
        set((state) => {
            console.log("User Data: ", userData)
            return ({
                loggedInUser: {
                    ...state.loggedInUser,
                    ...userData
                }
            })
        })
    }
}))