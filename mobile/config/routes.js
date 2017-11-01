import Dummy from '../components/Dummy';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Matches from '../components/Matches';
import Video from '../components/Video';
import Edit from '../components/Edit';
import Like from '../components/Like';

const stackRoutes = {
  Home: { screen: Main, 
    navigationOptions: {
      title: 'Room',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#FF5A5F', 
        elevation: null
      },
  } },
  Dummy: { screen: Dummy },
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
  } },
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

const tabRoutes = {
  Main: { 
    screen: Main, 
    tabBarOptions:{
      activeTintColor: 'white',
      inactiveTintColor: 'blue',
      activeBackgroundColor: 'blue',
      inactiveBackgroundColor: 'white',
    } },
}

export {stackRoutes, tabRoutes};