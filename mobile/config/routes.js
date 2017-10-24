import App from '../components/App';
import Dummy from '../components/Dummy';
import Loading from '../components/Loading';
import Login from '../components/Login';
import Main from '../components/Main';
const Routes = {
  Home: { screen: App },
  Dummy: { screen: Dummy },
  Loading: { screen: Loading },
  Login: { screen: Login },
  Main: { screen: Main }
}
export default Routes;