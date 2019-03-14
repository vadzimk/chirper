import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';


const store = createStore(reducer);

//pass the store to the Provider to stick it on the Context
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
//will add middleware to the application to support return a function from the action creator