
// !Packages
import { Dimensions, StyleSheet } from "react-native"

export const login = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        backgroundColor: "#12172b",
        borderWidth: 2,
        borderColor: "#fcd34d",
        width: (Dimensions.get("window").width - 20),
        height: (Dimensions.get("window").height / 2),
        borderRadius: 20,
        opacity: 0.95,
        elevation: 5,
        shadowColor: "#d9b945",
        shadowOpacity: 1,
        shadowRadius: 1,
        marginTop: 5,
        padding: 20
    },
    header: {
        fontSize: 22,
        color: "white",
        fontWeight: "600",
        letterSpacing: 4,
        textAlign: "center"
    },
    label: {
        color: "#fcd34d",
        fontSize: 18,
        fontWeight: "400",
        letterSpacing: 3
    },
    input: {
        fontSize: 16,
        color: "white",
        width: "100%",
        fontWeight: "500",
        backgroundColor: "#12172b",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10
    },
    inputGroup: {
        marginVertical: 10
    },
    button: {
        backgroundColor: "#d9b945",
        width: "100%",
        padding: 5,
        borderRadius:5,
        marginTop: 10
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center"
    }
})