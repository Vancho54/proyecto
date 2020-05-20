import React from 'react'
import NewsSlider from '../../../Widgets/NewsSlider/slider'
import NewsList from '../../../Widgets/NewsList/newslist'

const NewsMain =()=> {

    return(
        <div>
            <NewsSlider
            type='features'
            start={0}
            amount={3}
            setting={{
                dots: false
            }} />
            <NewsList 
                type='cardMain'
                loadmore={true}
                start={3}
                amount={10}
            />
        </div>
    )
}

export default NewsMain