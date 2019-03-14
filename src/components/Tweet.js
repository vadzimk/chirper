import React from 'react';
import {connect} from 'react-redux';
import {formatTweet} from "../utils/helpers";

class Tweet extends React.Component{

    render(){
        const {tweet} = this.props;
        if(tweet===null){
            return <p>This tweet doesn't exist</p>
        }

        console.log(this.props);
        return (
            <div className="tweet">

            </div>
        );
    }
}

//when connectint a container component to the redux state, what state the component needs from the store
const mapStateToProps=({authedUser, users, tweets}, ownProps)=>{
    const id = ownProps.id;
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null,
    };
};

export default connect(mapStateToProps)(Tweet);