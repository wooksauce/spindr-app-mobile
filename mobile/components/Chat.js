import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';

const USER_ID = '@userId';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('message', (message) => {
      let oldMessages = this.state.messages;
      // React will automatically rerender the component when a new message is added.
      this.setState({ messages: oldMessages.concat(message) });
    });
    this.onSend = this.onSend.bind(this);
    this.determineUser = this.determineUser.bind(this);
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    this.socket.emit('message', messages[0]);
    // console.log('SENTTTTTTTTTTTTT');
  }

  determineUser() {
    AsyncStorage.getItem('userId')
      .then((userId) => {
        if (userId) {
          this.socket.emit('i-dont-need-an-id');
        } else {
          this.socket.emit('i-need-id');
          this.socket.on('here-is-your-id', (id) => {
            AsyncStorage.setItem('userId', id);
            // Force a rerender in the React component
            this.setState({ id });
          });
        }
    });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default Chat;