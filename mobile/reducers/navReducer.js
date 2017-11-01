import { NavigationActions } from 'react-navigation';

import { StackNav } from '../navigators/appNavigator';

const initialStackState = StackNav.router.getStateForAction(StackNav.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialStackState, action) => {
  const nextState = StackNav.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;