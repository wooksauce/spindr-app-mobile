import { combineReducers } from 'redux';

import Auth from './authReducer';
import Nav from './navReducer';
import Dummy from './dummyReducer';

const appReducer = combineReducers({
  Auth,
  Dummy, 
  nav: Nav
});

export default appReducer;