import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/home'
import Layout from './HOC/Layout/layout'
import NewsArt from './Components/Articles/News/Post/index'
import VideoArt from './Components/Articles/Videos/Video/index'
import NewsMain from './Components/Articles/News/Main/index'
import VideoMain from './Components/Widgets/VideosList/VideoMain/videomain'

class Routes extends Component {

    render() {
        return(
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/news' exact component={NewsMain} />
                    <Route path='/articles/:id' exact component={NewsArt} />
                    <Route path='/videos/:id' exact component={VideoArt} />
                    <Route path='/video' exact component={VideoMain} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes