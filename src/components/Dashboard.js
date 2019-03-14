import React from 'react';
import {connect} from 'react-redux';
import Tweet from './Tweet';


class Dashboard extends React.Component{
    render(){

        return(
            <div>
                <h3 className="center">Your timeline</h3>
                <ul className="dashboard-list">
                    {this.props.tweets.map((id)=>(
                        <li key={id}>
                            <Tweet id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


//takes the store object as an argument
const mapSateToProps=({tweets})=>{
    return {
        tweets: Object.keys(tweets).sort((a,b)=>tweets[b].timestamp - tweets[a].timestamp)
    };
};
export default connect(mapSateToProps)(Dashboard);