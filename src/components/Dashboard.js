import React from 'react';
import {connect} from 'react-redux';


class Dashboard extends React.Component{
    render(){

        return(
            <div>
                <h3 className="center">Your timeline</h3>
                <ul className="dashboard-list">
                    {this.props.tweets.map((id)=>(
                        <li key={id}>
                            <div>TWEET ID: {id}</div>
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