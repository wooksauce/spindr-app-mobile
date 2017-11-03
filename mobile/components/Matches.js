import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

class Matches extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>You have zero match right now...</Text>
        </View>
        <Button 
          raised
          fontSize = {26}
          containerViewStyle={{paddingTop: 20,paddingBottom: 20}}
          buttonStyle={styles.chatBtn}
          icon={{name: 'comments', type: 'font-awesome'}}
          title = 'Chats'
          onPress = {() => navigate('Chat')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  infoSection: {
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888888',
  },
  chatBtn: {
    borderRadius: 10,
    backgroundColor: '#FF5A5F',
  }
})

export default Matches;