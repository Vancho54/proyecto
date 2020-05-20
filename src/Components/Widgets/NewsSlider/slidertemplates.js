import React from 'react'
import Slick from 'react-slick'
import './slider.css'
import { Link } from 'react-router-dom'

const SliderTemplates = (props) => {
    var template = null;
    const settings = {
        dots:props.settings,
        infinite:true,
        arrows:false,
        speed:500,
        slideToShow: 1,
        slideToScroll: 1
    }

    switch (props.type){
        case ('features'):
            template = props.data.map((el, i) => {
                return (
                    <div key={i}>
                        <div className='featuresi'>
                            <div className='featuresimg'
                            style={{background: `url(../images/articles/${el.image})`}}>
                            </div>
                            <Link to={`/articles/${el.id}`}>
                                <div className='featurescap'>
                                    {el.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
            template = null;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates