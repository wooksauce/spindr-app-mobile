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
          <Text>{this.props.username}</Text>
          <Text>{this.props.gender}</Text>
          <Text>{this.props.email}</Text>
        </View>
        <View style={styles.editBtn}>
          <Button 
            large
            icon={{name: 'envira', type: 'font-awesome'}}
            title = 'Edit'
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
  editBtn: {
    flex:1,
    alignItems: 'center',
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