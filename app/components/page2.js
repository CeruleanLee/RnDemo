import React, {Component} from 'react';
import styles from "../styles";
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import * as Constant from '../constant'

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
type Props = {};

class page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View style={[styles.centered]}>
                <Text style={{color: Constant.textColor56}}>show movie list</Text>
                <FlatList renderItem={this.renderMovie} data={this.state.data}
                          style={[styles.list]}/>
            </View>

        );


    }

    //<View style={[styles.centered]}>
    //                 <Text style={{color: Constant.textColor56}}>show movie list</Text>
    //                 <FlatList renderItem={this.renderMovie} data={this.state.data}
    //                           initialNumToRender={} keyExtractor={}
    //                           numColumns={} getItem={}
    //                           getItemCount={} disableVirtualization={}
    //                           maxToRenderPerBatch={} updateCellsBatchingPeriod={}
    //                           windowSize={}
    //                  style={styles.list}/>
    //             </View>


    //  <FlatList
    //                 data={this.state.data}
    //                 renderItem={this.renderMovie}
    //                 style
    //             />
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>正在加载...</Text>
            </View>


        );
    }

    renderMovie({item}) {

        return (
            <View style={styles.container}>

                <Image style={styles.thumnail}
                       source={{uri: item.posters.thumbnail}}/>
                <View style={styles.rightcontainer}>

                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>

            </View>


        );

    }
}
var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536051681847&di=b1abfcbf1a8671997e5dacb51859ce40&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8d5494eef01f3a2966bddeeb9425bc315c607c99.jpg"}
    }
];
export default page2;