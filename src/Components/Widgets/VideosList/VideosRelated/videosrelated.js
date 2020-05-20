import React from 'react'
import '../videoslist.css'
import VideoTemplate from '../videotemplate'

const videosRelated = (props) => {
    return(
        <div className='videosrelatedw'>
            <VideoTemplate 
                data={props.data}
                teams={props.teams}/>
        </div>
    )
}

export default videosRelated