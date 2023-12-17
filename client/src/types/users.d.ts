
// useUserStore
// authNavigator
type UserState = {
    loggedInUser: {
        gamer_tag: string,
        first_name: string,
        last_name: string,
        dob: string,
        email: string,
        isAuthenticated: boolean
    }
    logInUser: (userData: Partial<UserState['loggedInUser']>) => void
    logOutUser: () => void
}
