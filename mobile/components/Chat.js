import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';

const USER_ID = '@userId';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  
    this.onSend = this.onSend.bind(this);
    this.fetchChat = this.fetchChat.bind(this);
    this.appendMsg = this.appendMsg.bind(this);
  }

  componentDidMount() {
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('message', this.appendMsg);
      // let oldMessages = this.state.messages;
      // // React will automatically rerender the component when a new message is added.
      // this.setState({ messages: oldMessages.concat(message) });
  }

  appendMsg(message) {
    console.log('MESSAGE FROM SERVER:', message);
    // let oldMessages = this.state.messages;
    // console.log('old msgs:', oldMessages);
    // // React will automatically rerender the component when a new message is added.
    // this.setState((previousState) => ({
    //   messages: [message],
    // }));
 
  }

  fetchChat() {

  }

  onSend(messages = []) {
    // this.setState((previousState) => ({
    //   messages: GiftedChat.append(previousState.messages, messages),
    // }));
    // axios.post('http://localhost:3000/api/chats', {
    //   user_one: this.props.navigation.state.params.userId,
    //   chat_entry: messages[0].text
    // })
    this.socket.emit('message', messages[0]);
    console.log('Message sent:', messages[0]);
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