/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {} from 'react-native-router-flux'
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import store from './app/store/'
import styles, {screenWidth, screenHeight} from './app/styles';

import getRouter from './app/router';

import ImageView from "./app/components/widget/ImageView";

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.toNext = this.toNext.bind(this);

        this.state = {
            store:store,
            data: [],//保存数据
            loaded: false,
            // movies: null,//服务器响应返回的时候执行this.setState({movies: moviesData})来改变这个状态
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);

    }

    componentDidMount() {
        this.fetchData();
        this.toNext();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true,
                    // movies: responseData.movies,
                });
            });


    }

    // render() {
    //     var movie = MOCKED_MOVIES_DATA[0];
    //     /**/
    //     if (!this.state.movies) {
    //         return this.renderLoadingView();
    //     }
    //     var movie = this.state.movies[0];
    //     return this.renderMovie(movie);
    //
    // }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (

/*store 通过provider 挂载到react中 为react提供数据支持*/
            <Provider store={this.state.store}>
                {getRouter()}


            </Provider>

        );
    }
    // render() {
    //     if (!this.state.loaded) {
    //         return this.renderLoadingView();
    //     }
    //     return (
    //
    //
    //         <FlatList
    //             data={this.state.data}
    //             renderItem={this.renderMovie}
    //             style={styles.list}
    //         />
    //
    //     );
    // }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>正在加载...</Text>
            </View>


        );
    }

    // renderMovie(movie) {
    //     return (
    //         <View style={styles.container}>
    //             <Image style={styles.thumnail} source={{uri: movie.posters.thumbnail}}/>
    //             <View style={styles.rightcontainer}>
    //                 <Text style={styles.title}>{movie.title}</Text>
    //                 <Text style={styles.year}>{movie.year}</Text>
    //             </View>
    //         </View>
    //     );
    // }
    /**/
    // renderMovie({item}) {
    //
    //     return (
    //         <View style={styles.container}>
    //
    //             <Image style={styles.thumnail}
    //                    source={{uri: item.posters.thumbnail}}/>
    //             <View style={styles.rightcontainer}>
    //
    //                 <Text style={styles.title}>{item.title}</Text>
    //                 <Text style={styles.year}>{item.year}</Text>
    //             </View>
    //
    //         </View>
    //
    //
    //     );
    //
    // }

    toNext() {
        setTimeout(() => {
            Actions.reset("loginpage");

        }, 3000)
    }

}
/*  <Text style={style.mydemotext}>
          this is my demo！
        </Text>*/
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#eeeeee',
//     },
//     rightcontainer: {
//         flex: 1,
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//     mydemotext: {
//         textAlign: 'center',
//         color: '#ff0000',
//     },
//     thumnail: {
//         width: 53,
//         height: 81,
//         marginLeft: 12,
//         // placeholder:'img/default_img.png',
//     },
//     title: {
//         fontSize: 20,
//         marginBottom: 8,
//         textAlign: 'center',
//     },
//     year: {
//         textAlign: 'center',
//     },
//     list: {
//         backgroundColor: '#565656',
//         padding: 12,
//
//
//     }
// });
var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536051681847&di=b1abfcbf1a8671997e5dacb51859ce40&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8d5494eef01f3a2966bddeeb9425bc315c607c99.jpg"}
    }
];