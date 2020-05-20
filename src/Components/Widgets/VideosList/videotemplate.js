import React from 'react'
import './videoslist.css'
import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo/cardinfo'

const VideoTemplate = (props) => {
    return props.data.map((el, i) => {return (
        <Link to={`/videos/${el.id}`} key={i}>
            <div className='videoListItem'>
                <div className='leftie'
                style={{background:`url(/images/videos/${el.image})`}}>
                    <div></div>
                </div>
                <div className='rigthie'>
                    <CardInfo teams={props.teams} teamid={el.team} date={el.date}/>
                    <h2>
                        {el.title}
                    </h2>
                </div>
            </div>
        </Link>
    )})

}

export default VideoTemplate