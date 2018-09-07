import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

class ImageView extends React.PureComponent {
    static  propTypes = {
        source: PropTypes.object,
        style: ViewPropTypes.style,
        placeholder: PropTypes.number.isRequired,
    }
    state: {
        loading: boolean;
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        return (
            <Image source={this.state.source} style={this.props.style} onLoad={() => {
                this.setState({loading: false})
            }} onLoadEnd={() => {
                if (this.state.loading === true) {
                    this.setState({source: this.props.placeholder})
                }
            }}/>
            // {/*<View style={this.props.style}>*/}
            //     {/*/!*<Image style={[this.props.style, styles.imageStyle]} source={this.props.source} onLoad={() => this.setState({loading: false})}/>*!/*/}
            //     {/*/!*{this.state.loading ? <Image style={[this.props.style, styles.imageStyle]} source={this.props.placeholderSource}/> : null}*!/*/}
            //     {/*/!*//未加载网络图片时就有占位图可以用两个Image实现:*!/*/}
            //     {/*<Image style={[this.props.style, styles.imageStyle]} source={this.props.source}*/}
            //            {/*onLoad={() => this.setState({loading: false})}/>*/}
            //     {/*{this.state.loading ?*/}
            //         {/*<Image style={[this.props.style, styles.imageStyle]} source={this.props.placeholder}/> : null}*/}
            //
            //
            // {/*</View>*/}


        );
    }

}

const styles = StyleSheet.create({

    imageStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    }
})

export default ImageView;