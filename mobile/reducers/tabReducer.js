import { NavigationActions } from 'react-navigation';

import { TabBar } from '../navigators/tabNavigator';

const initialStackState = TabBar.router.getStateForAction(StackNav.router.getActionForPathAndParams('Main'));

const tabReducer = (state = initialStackState, action) => {
  const nextState = TabBar.router.getStateForAction(action, state);
  return nextState || state;
};

export default tabReducer;