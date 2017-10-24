import { combineReducers } from 'redux';

import Auth from './authReducer';
import Nav from './navReducer';

const appReducer = combineReducers({
  Auth, 
  nav: Nav
});

export default appReducer;