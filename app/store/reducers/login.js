import {combineReducers} from 'redux';
import {
    LOGIN_LOADING
    , LOGIN_SUCCESS, LOGIN_FAILE
} from '../actions/login';

export let initialState = {
    entities: {//登陆后获取到的用户数据存贮在entity里
        loginUser: null
    },
    loginData: {//登陆用到的数据
        loading: false,
        error: null
    }
}


let reducers = combineReducers({
    entities: function (state = {}, action) {
        switch (action.type) {
            case LOGIN_SUCCESS:
                return {...state, loginUser: action.playload};
            default:
                return state;
        }
    },
    loginData: function (state = {}, action) {

        switch (action.type) {
            case LOGIN_LOADING:
                return {...state, loading: action.playload};
            case LOGIN_FAILE:
                return {...state, error: action.playload};
            case LOGIN_SUCCESS:
                return {...state, error: null};
            default:
                return state;
        }


    }

});

export  default  reducers;