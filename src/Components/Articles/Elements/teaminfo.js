import React from 'react';
import '../articles.css'

const teamInfo = (props) => {

    return (
        <div className='teaminfo'>
            <div className='Le'
            style={{background:`url('/images/teams/${props.team.logo}')`}}>
            </div>
            <div className='Ri'>
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong>W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}</strong>
                </div>
            </div>
        </div>
    )
}

export default teamInfo