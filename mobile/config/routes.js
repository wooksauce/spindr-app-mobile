import App from '../components/App';
import Dummy from '../components/Dummy';
import Loading from '../components/Loading';
import Login from '../components/Login';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Matches from '../components/Matches';
import Video from '../components/Video';
import Edit from '../components/Edit';

const Routes = {
  Home: { screen: App },
  Dummy: { screen: Dummy },
  Loading: { screen: Loading },
  Login: { screen: Login,
    navigationOptions: {
      headerLeft: null
    } },
  Main: { screen: Main },
  Profile: { screen: Profile },
  Matches: { screen: Matches },
  // Video: { screen: Video },
  Edit: { screen: Edit }
}
export default Routes;