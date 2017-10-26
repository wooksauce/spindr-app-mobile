import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    }
  }

  fetchUserInfo = () => {
    axios.get(`http://10.0.2.2:3000/api/userId/${this.props.passUserId}`)
    .then(info => {
      this.setState({ userInfo : info });
      console.log('UserInfo: ', this.state.userInfo.data);
    })
    .catch(err => {
      console.log('Fetch err:', err);
    })
  }

  // handlePost() {
  //   axios.post('/api', {
  //     rentee_id: this.state.rentee_id,
  //     itemname: this.state.itemname,
  //     image: this.state.image,
  //     brand: this.state.brand,
  //     price: this.state.price,
  //     size: this.state.size,
  //     sex: this.state.sex,
  //     tag: this.parseThruTags(),
  //     status: this.state.status
  //   })
  //   .then(() => {
  //     console.log('Upload success');
  //   })
  //   .catch(err => {
  //     console.log('Upload err:', err);
  //   })
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button
        title = 'Ready'
        onPress = {() => this.fetchUserInfo() } />
        <Button 
        title = 'Matches'
        onPress = {() => navigate('Matches')} />
        <Button 
        title = 'Profile'
        onPress = {() => navigate('Profile')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default Main;