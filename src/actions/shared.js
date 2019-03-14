import {getInitialData} from "../utils/api";
import {receiveTweets} from "./tweets";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";

//assign authUser to mock api
const AUTH_ID = 'tylermcginnis';

export const handleInitialData =()=>(dispatch)=>{
    return getInitialData().then(({users, tweets})=>{
        //add the users and tweets to the state of the redux store -dispatch a few different actions
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTH_ID));
    });
};

//next will set up reducers to modify state based on these actions