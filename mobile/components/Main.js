import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Video from './Video';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    }
  }

  readyToPlay = () => {
    console.log('this is user id: ', this.props)
    axios.get(`http://13.57.52.97:3000/api/userId/${this.props.passUserId}`)
    .then(info => {
      this.setState({ userInfo : info.data });
      console.log('UserInfo:', this.state.userInfo);
    })
    .then(() => {
      this.postToFlask();
    })
    .catch(err => {
      console.log('Fetch err:', err);
    })
  }
  //
  postToFlask = () => {
    axios.post('http://13.57.39.204', this.state.userInfo)
    .then(() => {
      console.log('Posted to flask:', this.state.userInfo);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log('this is props in Main: ', this.props)
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'/>
        <Button
        title = 'Ready'
        buttonStyle={styles.readyBtn}
        onPress = {
          () => {
            this.readyToPlay()
            navigate('Ready');
          } 
          } />
        <Button 
        title = 'Matches'
        onPress = {() => navigate('Matches')}
        />
        <Button 
        title = 'Profile'
        onPress = {() => navigate('Profile')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  readyBtn: {
    borderRadius: 100,
  }
});

// export default Main;

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import axios from 'axios';
// import io from 'socket.io-client';

// import Video from './Video';

// //////

// let's have some indicator if ready === true

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {},
//       ready: false
//     }
//   }

//   ///////

//   // check to see if you can compare specific props and state
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.ready) {
//       this.socket = io('http://localhost:3000', {
//         query: `roomId=${this.socket.id}`
//       });
      
//       this.socket.on('ready', ({ room, id }) => {
//         room.forEach(person => {
//           if (person.id === currentUser.id) {
//             this.props.history.push({
//               pathname: '/ready',
//               state: { id }
//             });
//           }
//         });
//       });
//     } else {
//       return false;
//     }
//   }

//   readyToPlay = () => {
//     axios.get(`http://10.0.2.2:3000/api/userId/${this.props.passUserId}`)
//     .then(info => {
//       this.setState({ userInfo : info.data });
//       // store socketId here as well
//       console.log('UserInfo:', this.state.userInfo);
//     })
//     .then(() => {
//       this.postToFlask();
//       this.setState({ ready: true });
//     })
//     .catch(err => {
//       console.log('Fetch err:', err);
//     })
//   }

//   postToFlask = () => {
//     axios.post('http://127.0.0.1:5000/api', this.state.userInfo)
//     .then(() => {
//       console.log('Posted to flask:', this.state.userInfo);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text>Main</Text>
//         <Button
//         title = 'Ready'
//         onPress = {() => this.readyToPlay() } />
//         <Button 
//         title = 'Matches'
//         onPress = {() => navigate('Matches')} />
//         <Button 
//         title = 'Profile'
//         onPress = {() => navigate('Profile')} />
//         <Button
//         title = 'Video'
//         onPress = {() => navigate('Video')} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
// });

export default Main;