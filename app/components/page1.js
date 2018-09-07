import React, {Component} from 'react';
import {
    View, StatusBar, TouchableOpacity, Linking, Animated,
    StyleSheet, Dimensions, Platform, Alert, Text, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Fumi} from 'react-native-textinput-effects';
import * as Constant from '../constant'
import styles, {screenWidth, screenHeight} from '../styles';
import PropTypes from 'prop-types';
import {login} from '../store/actions/login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {primaryColor} from "../constant";
import {Actions} from 'react-native-router-flux';

/*这个例子在ReduxDemo挂载完成后调用login接口模拟登陆。
返回结果被塞到store中（数据格式由先前写好的reducers的组织方式决定）。
页面根据store中的数据展示内容。由于login发出的远程请求是假的，
所以这里总是失败，因此会显示失败的内容。

关*/

class page1 extends Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        loginUserName: PropTypes.string,
        loginError: PropTypes.string,


    };

    constructor(props) {
        super(props);
        this.userNameChange = this.userNameChange.bind(this);
        this.userPwdChange = this.userPwdChange.bind(this);
        this.params = {
            userName: '',
            password: ''
        };
        this.state = {
            etname: '',
            etpwd: '',
            secureTextEntry: true,
            serureIcon: 'eye-with-line',
            opacity: new Animated.Value(0),
            progress: new Animated.Value(0),
        }


    }

    /*ajax 拿数据*/
    componentDidMount() {
        this.props.login();
    }

    render() {
        let textInputProps = {
            style: {width: 250, height: 70, backgroundColor: Constant.white},
            activeColor: Constant.primaryColor,
            passiveColor: '#dadada',
            iconClass: FontAwesome,
            iconColor: Constant.primaryColor,
            iconSize: 25,
            clearButtonMode: "always"
        };
        return (
            <Animated.View

            >

                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} barStyle={"light-content"}>
                </StatusBar>
                <View style={[styles.centered, {marginTop: Constant.matginTop}]}>
                    <Text> please write</Text>

                    <Image source={require("../img/default_img.png")}
                           resizeMode={"contain"}
                           style={{width: 80, height: 80}}/>
                </View>
                {/*栏色*/}
                <View style={[{backgroundColor: '#E9E9E9'}, {
                    height: 360, width: screenWidth - 80,
                    margin: 50,
                    borderRadius: 10,

                }]}>
                    <View style={[styles.centered, {marginTop: Constant.matginTop * 2}]}>
                        <Fumi
                            ref={"userNameInput"}
                            {...textInputProps}

                            label={'username'}
                            iconClass={FontAwesome}
                            iconName={'user'}
                            value={this.state.etname}
                            onChangeText={this.userNameChange}
                        />

                    </View>
                    <View style={[styles.centered, {marginTop: Constant.matginTop}]}>
                        <Fumi
                            ref={"passwordInput"}
                            {...textInputProps}

                            label={'password'}
                            iconClass={FontAwesome}
                            iconName={'keyboard-o'}
                            value={this.state.etpwd}
                            onChangeText={this.userPwdChange}
                        />

                    </View>
                    <TouchableOpacity
                        style={[styles.centered, {marginTop: Constant.matginTop}]}
                        onPress={() => {
                            alert("click login-" + this.params.userName + "-" + this.params.password)
                            Actions.reset("page2");

                        }}
                    >
                        <View style={[styles.centered, {
                            backgroundColor: Constant.primaryColorLight,
                            width: 230,
                            marginTop: Constant.matginTop,
                            paddingHorizontal: Constant.nomalPadding,
                            borderRadius: 5,
                        }]}>


                            <Text style={[styles.loginText]}> login</Text>
                        </View>

                    </TouchableOpacity>


                </View>

            </Animated.View>
        );
    }

    userNameChange(text) {
        this.params.userName = text;
    }

    userPwdChange(text) {
        this.params.password = text;
    }

    toNext() {

    }

}

/**
 *   render() {
        if (this.props.isLoading) {
            return (<View>
                <Text>1</Text>
            </View>);
        }
        if (this.props.loginUserName) {
            return (<View>
                <Text>2</Text>
            </View>);
        }
        if (this.props.loginError) {
            return (<View>
                <Text>3</Text>
            </View>);
        }
        return (<View>
            <Text> me </Text>
        </View>);
    }
 */


// if (this.props.isLoading) {
//             return (<View>looding...</View>);
//         }
//         if (this.props.loginUserName != null) {
//             return (
//                 <View>load success</View>
//             );
//         }
//         if (this.props.loginError != null) {
//             return (<View>load error</View>);
//         }
// return (<View>nothing</View>)

/*让展示组件订阅了来自store的数据*/
const mapStateToProps = (state, ownProps) => ({
    isLoading: state.loginData.loading,
    loginUserName: state.entities.loginUser || 'no name',
    loginError: state.loginData.error && state.loginData.error.toString() || 'some error'
});
/*让展示组件默认可以dispatch 各种action*/
const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(page1)