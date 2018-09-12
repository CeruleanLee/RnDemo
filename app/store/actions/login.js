import {Actions} from "react-native-router-flux";

/**
 *在actioncreator里面完成数据的获取和处理工作，并且
 * 通过向store 发送各个组合的action,从而达到控制页面展示内容实现交互
 */

export  const LOGIN_LOADING='LOGIN_LOADING';
export  const LOGIN_SUCCESS='LOGIN_SUCCESS';
export  const LOGIN_FAILE='LOGIN_FAILE';
/*actionCreator */
export  function loginLoading(loading) {
    return{
        type: LOGIN_LOADING,
        playload: loading,
    }
}
/*actionCreator */
export  function loginSuccess(data) {
    return{
        type: LOGIN_SUCCESS,
        playload: data,
    }
}
/**/
/*actionCreator */
export  function loginFail(error) {
    return{
        type: LOGIN_FAILE,
        playload: error,
    }
}
/*actionCreator    被组件调用后会向store发送action 然后被reducer
 处理*/
export function login() {
    return function (dispatch) {

        dispatch(loginLoading(true));
        // dispatch(loginSuccess(true));
        setTimeout(() => {
           dispatch(loginSuccess("success"));

        }, 300);
        // fetch('https://www.baidu.com')
        //     .then((response) =>{
        //         dispatch(loginLoading(false));
        //         /*格式化数据，对数据处理*/
        //         dispatch(loginSuccess("success"));
        //     })
        //     .catch((error) =>{
        //         dispatch(loginLoading(false));
        //         dispatch(loginFail("假数据"));
        //     })

    }
}