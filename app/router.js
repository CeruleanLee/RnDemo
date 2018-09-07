import React, {Component} from 'react';
import {
    Router, Scene, Lightbox
} from 'react-native-router-flux'
import page1 from './components/page1'
import page2 from './components/page2'

const getRouter = () => {
    return (
        <Router>
            <Lightbox>
                {/*<Scene key="">*/}
                <Scene key="loginpage" component={page1} showLabel={false}/>
                {/*<Scene key="main">*/}

                    {/*/!*<Scene key="WelcomePage" component={WelcomePage} hideNavBar hideTabBar hide/>*!/*/}
                {/*</Scene>*/}
                {/*<Scene key="loginpage" component={page1} showLabel={false}/>*/}
                {/*</Scene>*/}
                <Scene key="page2" component={page2} showLabel={false}/>

            </Lightbox>
        </Router>
    );


}

export default getRouter;