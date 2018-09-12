/**
 * Created by guoshuyu on 2017/11/7.
 *
 *
 * 创建store
 */
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers, {initialState} from './reducers/login';
import {createLogger} from 'redux-logger';
// 安装redux-devtools-extension的可视化工具。
import {composeWithDevTools} from 'redux-devtools-extension'


// let enhancer = applyMiddleware(thunk);
//
// if (process.env.NODE_ENV === 'development') {
//     enhancer = compose(
//         applyMiddleware(thunk)(createLogger())
//     )
// }


// if (process.env.NODE_ENV === 'development') {
//     if (module.hot) {
//         module.hot.accept('./reducers', () => {
//             const nextRootReducer = require('./reducers').default;
//             store.replaceReducer(nextRootReducer)
//         })
//     }
//
// }

let store = createStore(reducers, initialState, applyMiddleware(thunk));
// let store = createStore(reducers, initialState, enhancer);


/** BEFORE
 export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

 const createStoreWithMW = applyMiddleware(thunk)(createStore);
 const store = createStoreWithMW(reducers);
 **/
export default store