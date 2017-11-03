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

  componentDidMount(){
    console.log('ready mounted')
    this.socket = io('http://13.57.52.97:3000');
    this.socket.on('roomReady', (room) => {
      console.log('roomready is working', room)
      this.socket.emit('inHolding', this.props.userId, room);
      //for testing:
      this.socket.emit('inHolding', 3000);
      this.socket.emit('inHolding', 3001);
      this.socket.emit('inHolding', 3002);
      this.socket.emit('inHolding', 3003);
      this.socket.emit('inHolding', 3004);

      this.socket.on('readyWaiting', room => {
        console.log(room)
        this.setState({srms: room})
      });
      this.socket.on('vidReady', unique => {
        console.log ('unique rooms', unique)
      })
    })
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