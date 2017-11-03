import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button } from 'react-native-elements';

class Profile extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'/>
        <View style={styles.profilePic}>
          <Avatar
            width = {180}
            height = {180}
            source={{uri: this.props.picture}}
            activeOpacity={0.7}
            rounded />
          </View>
        <View style={styles.profileInfo}>
          <Text style={styles.infoUsername}>{this.props.username}</Text>
          <Text style={styles.infoEmail}>{this.props.email}</Text>
        </View>
        <View style={styles.editBtn}>
          <Button 
            raised
            fontSize = {26}
            containerViewStyle={{paddingTop: 20,paddingBottom: 20}}
            buttonStyle={styles.addInterestBtn}
            icon={{name: 'book', type: 'font-awesome'}}
            title = 'Add Interest'
            onPress = {() => navigate('Edit')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profilePic: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  profileInfo: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  infoUsername: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoGender: {
    textAlign: 'center',
    fontSize: 20,
  },
  infoEmail: {
    textAlign: 'center',
    fontSize: 20,
  },
  editBtn: {
    flex:1,
    alignItems: 'center',
  },
  addInterestBtn: {
    borderRadius: 10,
    backgroundColor: '#FF5A5F',
  }

});

const profileState = (store) => {
  return {
    username: store.Auth.username,
    email: store.Auth.email,
    picture: store.Auth.picture,
    gender: store.Auth.gender,
  }
}

export default connect(profileState)(Profile);