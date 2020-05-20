import React from 'react'
import { Link } from 'react-router-dom'
import './buttons.css'

const Buttons = (props) => {
    let template = null;
    
    switch(props.type){
        case ('loadmore'):
            template= (
                <div className='button'
                onClick={props.loadmore}>
                    {props.cta}
                </div>
            );
            break;
        case ('linkTo'):
            template = (
                <Link to={props.linkTo}
                className='button'>
                    {props.cta}
                </Link>
            )
            break;
        default:
            template= null;
    }
    return template
}

export default Buttons