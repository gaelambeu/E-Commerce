import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        width: 130,
        height: 180,
        marginEnd: 20,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    }, 
    imageContainer: {
        flex: 1,
        width: 117,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",  
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.small,
        marginBottom: 2
    },
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.xSmall,
        color: COLORS.gray    
    },
    price: {
        fontFamily: "bold",
        fontSize: SIZES.small,
        
    },
    addBtn:{
        position: 'absolute',
        bottom: 5,
        right: 1
    }
})

export default styles