
//any time the action is dispatched
const logger=(store)=>(next)=>(action)=>{
    console.group(action.type);
    console.log("The action is: ", action);

    //next will be dispatch and we pass it an action - it will update the state
    const returnValue = next(action);
    console.log("The new state is: ", store.getState());
    console.groupEnd();
    return returnValue;
};

export default logger;