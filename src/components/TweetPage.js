import React from 'react';
import {connect} from 'react-redux';
import Tweet from './Tweet'
import NewTweet from './NewTweet';

class TweetPage extends React.Component{
    render(){
        const {id, replies} = this.props;
        return (
            <div>
                <Tweet id={id}/>
                <NewTweet id={id}/>
                {replies.length !==0 && <h3 className="center">Replies</h3> }
                <ul>
                    {replies.map(replyId=>(
                        <li key={replyId}>
                            <Tweet id={replyId}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps=({authdeUser, tweets, users}, ownProps)=>{
    const {id} = ownProps.match.params;

    return {
        id,
        replies: !tweets[id] ? [] : tweets[id].replies.sort((a, b)=>tweets[b].timestamp-tweets[a].timestamp)
    };
};

export default connect(mapStateToProps)(TweetPage);