import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger as logger } from 'redux-logger';
// import createHistory from 'history/createBrowserHistory';


import appReducer from '../reducers';

// const history = createHistory();
const middleware = applyMiddleware(promise(), thunk, logger());

// Initialize redux state with (reducers, middleware)
const store = createStore(appReducer, middleware);

export default store;
