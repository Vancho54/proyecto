import React from 'react';
import '../articles.css';

const PostInfo = (props) => {
    return (
        <div className='postinfo'>
            <div>
                Date: <span>{props.data.date}</span>
            </div>
            <div>
                Author: <span>{props.data.author}</span>
            </div>
        </div>
    )
}

export default PostInfo