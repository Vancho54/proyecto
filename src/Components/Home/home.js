import React from 'react';
import NewsSlider from '../../Components/Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newslist'
import VideosList from '../Widgets/VideosList/videoslist'

const Home = () => {
    return (
        <div>
            <NewsSlider 
            type='features'
            start={0}
            amount={3}
            setting={{
                dots: false
            }}/>
            <NewsList 
                type='card'
                loadmore={true}
                start={3}
                amount={3}
            />
            <VideosList
            type='card'
            title={true}
            loadmore={true}
            start={0}
            amount={3} />
        </div>
    )
}

export default Home