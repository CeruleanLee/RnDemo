import React, {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Constant from "./constant";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
// export  const screenHeight=Dimensions.get("window").height;

const styles = StyleSheet.create({

    centered: {
        justifyContent: "center",
        alignItems: "center"


    },
    loginText:{
        color:Constant.white,
        fontSize:Constant.textSize18,
    },
    absoluteFull: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 999,
    },

    list: {
        backgroundColor: '#565656',
        padding: 12,


    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    rightcontainer: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    mydemotext: {
        textAlign: 'center',
        color: '#ff0000',
    },
    thumnail: {
        width: 53,
        height: 81,
        marginLeft: 12,

    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});


export default styles;