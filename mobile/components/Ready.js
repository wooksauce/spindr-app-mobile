import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native';
import io from 'socket.io-client';

class Ready extends Component {
  constructor(props){
    super(props)
    this.state = {
      srms: []
    }
  }

  // receiveSrms = (serverSrms) => {
  //   console.log(serverSrms)
  //   this.setState({srms: serverSrms})
  // }

  componentDidMount(){
    console.log('ready mounted')
    this.socket = io('http://13.57.52.97:3000');
    this.socket.emit('inHolding', this.props.userId);
    this.socket.on('readyWaiting', room => {
      console.log(room)
      this.setState({srms: room})
    });

  }

  render(){
    return (
      <View>
        <Text>Hello Friend</Text>
      </View>
    )
  }
}

const InHoldingState = (store) => {
  return {
    userId: store.Auth.userId
  }
}

export default connect(InHoldingState, null)(Ready);


////;;

// import React, { Component } from 'react';
// import io from 'socket.io-client';

// import VideoChatList from './VideoChatList'

// class Ready extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rooms: [],
//       messages: [],
//       visited: [],
//       message: '',
//     }
//   }

//   componentDidMount() {
//     // only run if the props check is false or doesn't exist
//     // males remaining stationary and the girls leaving is like the girls going to the bathroom then switching the dates!!!
//       // there could be animations with that theme
//       // or it's sexist

//     this.socketEvents();
//     this.setState({visited: [...this.state.visited, this.props.visitedID]})
//   }

//   socketEvents = () => {
//     this.socket = io('http://localhost:3000', {
//       query: `roomId=${this.props.location.state.id}`
//     });
//     // if everyone is gonna come back here once it's done, then run it only once and add the checker in video unmount
//     // if not then it's okay since no users will be male again after they break out into rooms
//     this.socket.on('connect', () => {
//       if (userGender === male) {
//         this.socket.emit('vidchat', {
//           roomID: this.props.location.state.id,
//           id: this.socket.id
//         });
//         this.props.history.push({
//           pathname: '/video',
//           state: { id: this.socket.id }
//         });
//         // this.setState({ id: this.socket.id }, () => {
//         //   console.log('this is hte state of id ', this.state.id)
//         // });
//       }
//     });

//     // create a messaging feature here
//     this.socket.on('message', (msg) => {
//       this.setState({ messages: [...this.state.messages, msg] });
//     });

//     this.socket.on('vidchat', (room) => {
//       this.setState({ rooms: [...this.state.rooms, room] })
//     });
//   }

//   onPressJoinRoom = (event) => {
//     this.props.history.push({
//       pathname: '/video',
//       id: event.target.id
//     })
//   }

//   onTypeMessage = (event) => {
//     this.setState({ message: event.target.value})
//   }
// // if the length of rooms is 3, then map over a videolist component and pass the socketId to it
// // the male will be in the same room because he's using his own socketId
// // the female will enter a room with that particular male because the socketID was saved in state and used to create the video rooms
// // make three buttons that are mapped with these videos

//   render() {
//     // this.state.rooms is just the rooms you get from the males leaving
//     // this won't work
//     // how am i gonna get the state visited shit updated.. 
//     // i could pass it up and down......
//     const rooms = [this.props.location.state.visited] || this.state.rooms
//     return (
//       <View>
//         <VideoChatList rooms={this.state.rooms} joinRoom={this.onPressJoinRoom} />
//         <MessageList />
//         <Keyboard 
//           onSubmit={this.socket.emit('message', {
//             msg: this.state.message,
//             roomID: this.props.location.state.id
//             })} 
//           onPress={this.onTypeMessage}
//         />
//       </View>
//     );
//   }
// }

// export default Ready;