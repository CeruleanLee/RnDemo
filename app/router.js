import React, {Component} from 'react';
import {
    Router, Scene, Lightbox
} from 'react-native-router-flux'
import page1 from './components/page1'
import page2 from './components/page2'
import page3 from './components/page3'
import styles from "./styles";
import * as Constant from "./constant"
import BackUtils from './utils/backUtils'

const getRouter = () => {
    return (
        <Router
            //适用于所有场景的Style（可选）
            getSceneStyle={() => {
                return styles.routerStyle
            }}
            //允许在Android中自定义控制返回按钮
            backAndroidHandler={
                BackUtils()}>
            <Lightbox>
                {/*<Scene key="">*/}
                <Scene key="loginpage" component={page1} showLabel={false} back={true}/>
                {/*<Scene key="main">*/}

                <Scene key="page2" component={page2} title={"list"} navigationBarStyle={styles.navigationBar}
                       navBarButtonColor={Constant.textColor56}
                       back={true}
                       titleStyle={{color: Constant.titleTextColor}}/>
                <Scene key="page3" component={page3} title={"page3"} navigationBarStyle={styles.navigationBar}
                       navBarButtonColor={Constant.textColor56}
                       back={true}
                       titleStyle={{color: Constant.titleTextColor}}/>
                {/*/!*<Scene key="WelcomePage" component={WelcomePage} hideNavBar hideTabBar hide/>*!/*/}
                {/*</Scene>*/}
                {/*<Scene key="loginpage" component={page1} showLabel={false}/>*/}
                {/*</Scene>*/}
                <Scene key="root"
                       navigationBarStyle={styles.navigationBar}
                >
                </Scene>
            </Lightbox>
        </Router>
    );


}

export default getRouter;