import React from 'react'
import TeamInfo from '../../Elements/teaminfo'
import PostData from '../../Elements/postdata'

const HeaderP =(props) => {

    const teamInfo = (team) => {
        return team ? <TeamInfo team={team} /> : null
    }

    const postInfo = (date, author) => {
        return <PostData data={{date, author}}/>
    }

    return (
        <div>
            {teamInfo(props.teamData)}
            {postInfo(props.date, props.author)}
        </div>
    )
}

export default HeaderP