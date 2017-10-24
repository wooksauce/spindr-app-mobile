import { combineReducers } from 'redux';

import Nav from './navReducer';

const appReducer = combineReducers({
  nav: Nav
});

export default appReducer;