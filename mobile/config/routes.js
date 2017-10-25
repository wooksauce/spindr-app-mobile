import App from '../components/App';
import Dummy from '../components/Dummy';
import Loading from '../components/Loading';
import Login from '../components/Login';
import Main from '../components/Main';
import Profile from '../components/Profile';

const Routes = {
  Home: { screen: App },
  Dummy: { screen: Dummy },
  Loading: { screen: Loading },
  Login: { screen: Login,
    navigationOptions: {
      headerLeft: null
    } },
  Main: { screen: Main },
  Profile: { screen: Profile }
}
export default Routes;