import React, { Component } from 'react';
import {connect}from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
          <LoadingBar/>
          {this.props.loading===true
              ?null:
              <NewTweet/>}
      </div>
    )
  }
}


const mapStateToProps=({authedUser})=>{
    return {
        loading: authedUser === null,
    };
};

//in order to have access to dispatch we need to connect the App component to the Context's store
//the first invocation is empty - we need nothing from the state object in it
export default connect()(App);