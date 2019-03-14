export const RECEIVE_USERS = 'RECEIVE_USERS';

//action creator
export const receiveUsers =(users)=>{
    return {
        type: RECEIVE_USERS,
        users,
    };
};