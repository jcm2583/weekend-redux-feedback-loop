[ SET UP - React/Redux ]
    [ x ] npm install
    [ x ] npm install redux 
    [ x ] npm install react-redux
    [ x ] npm install redux-logger
    [ x ] npm install react-router-dom
    [ x ] Make Components
    [  ] Material UI ?
        [ x ] npm install @material-ui/core
        [ x ] npm install @material-ui/icons
        [ x ] npm install @fontsource/roboto
            [ x ] import '@fontsource/roboto';
    [  ] Bootstrap ?
        [  ] npm install react-bootstrap bootstrap@4.6.0
    [ ] IN APP
        [ x ] Import {Route, HashRouter as Router} from 'react-router-dom'
        [ x ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ x ] Client
                [ x ] Make Routes through the different pages
            [ x ] Admin
                [ x ] Make Routes through the different pages
    [ ] IN INDEX.JS 
        [ x ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [ x ] import {Provider} from 'react-redux';
        [ x ] import logger from 'redux-logger';
        [ x ] Create Store
            [ x ] Wrap with combineReducers
                [ ] Pass in reducers
            [ x ] applyMiddleware
                [ x ] logger
        [ x ] React.DOM.render
            [  ] React.StrictMode?
            [ x ] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [ x ] Service Worker?