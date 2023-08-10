import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        width: "100%"
    }, 
    welcomeText: (color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -5,
        marginTop: top,
        color: color,
        marginHorizontal: 12
    }), 
    searchContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
    }
})

export default styles