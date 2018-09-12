import React, {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import * as Constant from "./constant";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
// export  const screenHeight=Dimensions.get("window").height;
export const navBarHeight = (Platform.OS == 'ios') ? Constant.iosnavHeaderHeight : Constant.andrnavHeaderHeight;
export const statusHeight = (Platform.OS == 'ios') ? StatusBar.currentHeight : 25;


const styles = StyleSheet.create({
//适用于所有场景的Style（可选）
    routerStyle: {
        //设置router的样式
        flex: 1,
        backgroundColor: Constant.white,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,

    },
    navigationBar: {
        backgroundColor: Constant.barColor,
        paddingTop: StatusBar.currentHeight,
        height: navBarHeight,


    },
    //        textAlign: 'center',
    toolBar: {
        backgroundColor: Constant.primaryColorLight,
        height: navBarHeight,
        justifyContent:'center',
        alignContent:'center',
        fontSize: 18,
color:Constant.textColor56,
    },


    centered: {
        justifyContent: "center",
        alignItems: "center"


    },
    loginText: {
        color: Constant.white,
        fontSize: Constant.textSize18,
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