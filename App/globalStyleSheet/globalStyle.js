const { StyleSheet } = require("react-native");

const globalStyleSheet = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    visibleFontSize:{
        fontSize: 18,
        color:'black'
    },
    paddingMarginAllSide5:{
        paddingHorizontal:5,
        paddingVertical:5,
        marginVertical:10,
        marginHorizontal:10
    }
}) 

export default globalStyleSheet