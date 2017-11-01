import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      previous: []
    }
    this.onSend = this.onSend.bind(this);
    this.fetchLogs = this.fetchLogs.bind(this);
    this.fakeMatchId = 104;
  }

  componentDidMount() {
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('message', this.onSend);
    this.socket.on('roomExists', this.fetchLogs);
    this.socket.emit('joinRoom', this.props.userId, this.fakeMatchId);
  }

  fetchLogs() {
    axios.get('http://localhost:3000/api/chats')
      .then(logs => {
        console.log('FETCHED LOGS:', logs);
        const getRes = logs.data;
        const giftedChatFormatted = getRes.map(log => {
          return { _id: log.id,
            text: log.chat_entry,
            createdAt: new Date()
          }
        })

        console.log('AFTER FORMATTING:', giftedChatFormatted);
        giftedChatFormatted.reverse();

        // for (let i = 0; i < getRes.length; i++) {
        //   console.log('PUSHING:', getRes[i]['chat_entry']);
        //   this.state.previous.push(getRes[i]['chat_entry']);
        // }
        // console.log('AFTER FOR LOOP:', { text: this.state.previous });
        this.setState((previousState) => ({
          messages: GiftedChat.append(previousState.messages, giftedChatFormatted),
        }));
      })
      .catch(err => {
        console.log(err);
      })
  }

  onSend(messages = []) {
    console.log('MESSAGES:', messages);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    axios.post('http://localhost:3000/api/chats', {
      room_num: this.props.userId + this.fakeMatchId,
      chat_entry: messages[0].text
    })
    this.socket.emit('message', messages[0], this.props.userId + this.fakeMatchId);
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

const chatState = (store) => {
  return {
    userId: store.Auth.userId,
  }
}
export default connect(chatState, null)(Chat);