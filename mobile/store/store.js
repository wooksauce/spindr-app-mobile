import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import appReducer from '../reducers/index';

const middleware = applyMiddleware(logger);
const store = createStore(appReducer, middleware);

export default store;
