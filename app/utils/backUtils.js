import React, {Component} from 'react';
import {
    BackHandler
} from 'react-native';

import Toast from '../components/widget/ToastProxy'
import SplashScreen from '../components/widget/SplashNative'

import {Router, Actions, Scene} from 'react-native-router-flux';
//退出
export default function BackUtils() {
    let hasTip = false;
    let ts;
    return function () {
        if (Actions.state.routes[0].index > 0) {
            Actions.pop();
            return true;
        }
        ts = Date.now();
        if (!hasTip) {
            let handler = function () {
                let now = Date.now();
                if (now - ts < 1000) {
                    requestAnimationFrame(handler)
                } else {
                    hasTip = false
                }
            };
            handler();
            hasTip = true;
            Toast("双击两次退出");
            return true
        } else {
            //BackHandler.exitApp();
            SplashScreen.exit();
            return true
        }
    }
}
