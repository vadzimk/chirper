import {getInitialData} from "../utils/api";
import {receiveTweets, RECEIVE_TWEETS} from "./tweets";
import {receiveUsers, RECEIVE_USERS} from "./users";

export const handleInitialData =()=>(dispatch)=>{
    return getInitialData().then(({users, tweets})=>{
        //add the users and tweets to the state of the redux store -dispatch a few different actions
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
    });
};