import React from 'react'
import VideosList from '../videoslist'

const VideoMain =()=> {

    return(
        <div>
            <VideosList
            type='card'
            title={false}
            loadmore={true}
            start={0}
            amount={9} />
        </div>
    )
}

export default VideoMain