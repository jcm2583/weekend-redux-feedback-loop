import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';





const storeFeedbackReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_FEELING' :
            return {...state, feeling: action.payload};

        case 'ADD_UNDERSTANDING' :
            return {...state, understanding: action.payload};

        case 'ADD_SUPPORT' :
            return {...state, support: action.payload};

        case 'ADD_COMMENTS' :
            return {...state, comments: action.payload};
            
            
            default : 
                return state;
    }
    
    return state;


}




const store = createStore(
    combineReducers({
        storeFeedbackReducer
    }),
    applyMiddleware(
        logger
    )
);




ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
