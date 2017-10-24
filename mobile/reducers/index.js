import { combineReducers } from 'redux';

import Auth from './authReducers';
import Nav from './navReducers';

const appReducer = combineReducers({
  Auth, 
  nav: Nav
});

export default appReducer;