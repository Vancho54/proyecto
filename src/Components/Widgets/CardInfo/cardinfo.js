import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons'
import './cardinfo.css'

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((el) => {
            return el.id === team
        });
        if (data) {
            return data.name
        }
    }

    return (
        <div className='cardinfo'>
            <span className='team'>
                {teamName(props.teams, props.teamid)}
            </span>
            <span className='date'>
                <FontAwesomeIcon className='icon' icon={faClock}/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo