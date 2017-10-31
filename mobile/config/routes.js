import App from '../components/App';
import Dummy from '../components/Dummy';
import Loading from '../components/Loading';
import Login from '../components/Login';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Matches from '../components/Matches';
import Video from '../components/Video';
import Edit from '../components/Edit';
import Like from '../components/Like';


const Routes = {
  App: { screen: App, 
    navigationOptions: {
      header: null,
      headerStyle: {
        backgroundColor: '#FF5A5F', 
        elevation: null
      },
  } },
  Dummy: { screen: Dummy },
  Loading: { screen: Loading },
  Login: { screen: Login,
    navigationOptions: {
      headerLeft: null
    } },
  Main: { screen: Main },
  Profile: { screen: Profile, navigationOptions: {
      title: 'Profile',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#FF5A5F', 
        elevation: null
      },
  } },
  Matches: { screen: Matches,   navigationOptions: {
      title: 'Matches',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#FF5A5F', 
        elevation: null
      },
  }},
  Video: { screen: Video,
    navigationOptions: {
    header: null,
    headerLeft: null
  } },
  Edit: { screen: Edit, navigationOptions: {
    title: 'Edit',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: '#FF5A5F', 
      elevation: null
    },
} },
  Like: { screen: Like,
    navigationOptions: {
    headerLeft: null
  } }
}
export default Routes;