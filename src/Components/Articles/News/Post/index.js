import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../../../../config'
import '../../articles.css'
import HeaderP from './header'

class NewsArt extends Component {

    state = {
        article: [],
        team: []
    }

    componentWillMount () {
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
            .then( response => {
                let article = response.data[0]
                
                axios.get(`${URL}/teams?id=${article.team}`)
                    .then(response => {
                        this.setState({
                            article,
                            team:response.data
                        })
                    })
            })
    }

    render() {
        const article = this.state.article;
        const team = this.state.team;

        return(
            <div className='articlecon'>
                <HeaderP 
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}/>
                <div className='bodypost'>
                    <h1>{article.title}</h1>
                    <div className='postimg'
                    style={{background:`url(/images/articles/${article.image})`}}></div>
                    <div className='postext'>{article.body}</div>
                </div>
            </div>
        )
    }
}

export default NewsArt