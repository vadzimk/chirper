import React, { Component,Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect}from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
            <BrowserRouter>
                <Fragment>
                  <LoadingBar/>
                  <div className="container">
                      <Nav/>
                      {this.props.loading===true
                          ?null:
                          <div>
                              <Route exact path='/' component={Dashboard}/>
                              <Route path='/tweet/:id' component={TweetPage}/>
                              <Route path='/new' component={NewTweet}/>
                          </div>}
                  </div>
                </Fragment>
            </BrowserRouter>
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