import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  render() {
    return (
    <GiftedChat
        messages={this.state.messages}
        onSend={(message) =>  {
          console.log('Msg sent')}}
        user={{
          _id: 1,
        }}
        />
    );
  }
}

export default Chat;