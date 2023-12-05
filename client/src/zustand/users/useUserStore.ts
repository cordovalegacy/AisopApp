import { create } from "zustand"

interface UserState {
    loggedInUser: {
        gamer_tag: string,
        first_name: string,
        last_name: string,
        email: string,
        isAuthenticated: boolean
    }
    logInUser: (userData: Partial<UserState['loggedInUser']>) => void
}

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