import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('message', this.onSend);
    this.socket.emit('joinRoom', 'test room');
  }

  onSend(messages = []) {
    console.log('MESSAGES:', messages);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    // axios.post('http://localhost:3000/api/chats', {
    //   user_one: this.props.navigation.state.params.userId,
    //   chat_entry: messages[0].text
    // })
    this.socket.emit('message', messages[0], 'test room');
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
      />
    );
  }
}

export default Chat;