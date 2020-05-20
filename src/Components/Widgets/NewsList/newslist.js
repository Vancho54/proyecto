import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config'
import './newslist.css'
import Button from '../Buttons/buttons'
import CardInfo from '../CardInfo/cardinfo'

class NewsList extends Component {
    
    state = {
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount: this.props.amount
    }

   componentWillMount (){
        this.request(this.state.start, this.state.end)
    }

    request = (start,end) => {
        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
                .then( response => {
                    this.setState({
                        teams: response.data
                    })
                })
        }
        axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
            .then( response=> {
                this.setState({
                    items:[...this.state.items,...response.data],
                    start,
                    end
                })
            })
    }

    loadmore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    renderNews = (type) => {
       let template = null
        switch(type) {
        case('card'):
            template = this.state.items.map((el, i) => (
                <CSSTransition
                classNames={{
                    enter: 'newsW',
                    enterActive: 'newsWE'
                }}
                timeout={500}
                key={i}>
                <div>
                    <div className='carditem'>
                        <CardInfo 
                        teams={this.state.teams}
                        teamid={el.team}
                        date={el.date}/>
                        <Link to={`/articles/${el.id}`}>
                            <h2>{el.title}</h2>
                        </Link>
                    </div>
                </div>
                </CSSTransition>
            ))
            break;
        case('cardMain'):
                template = this.state.items.map((el, i) => (
                    <CSSTransition
                    classNames={{
                        enter: 'newsW',
                        enterActive: 'newsWE'
                    }}
                    timeout={500}
                    key={i}>
                    <div>
                        <div className='carditem'>
                            
                            <Link to={`/articles/${el.id}`}>
                                <div className='mainews'>
                                    <div className='leftW' 
                                    style={{background:`url('images/articles/${el.image}')`}}>
                                        <div></div>
                                    </div>
                                    <div className='rightW'>
                                    <CardInfo 
                                        teams={this.state.teams}
                                        teamid={el.team}
                                        date={el.date}/>
                                    <h2>{el.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </CSSTransition>
                ))
                break;
        default:
            template = null;
       }

       return (
           template
       );
    }

    render() {
        return (
            <div>
                <TransitionGroup
                Component='div'
                className='list'>
                    { this.renderNews( this.props.type)}
                </TransitionGroup>
                <Button 
                    type='loadmore'
                    loadmore={() => this.loadmore()}
                    cta='Load More News'/>
            </div>
        )}
}

export default NewsList