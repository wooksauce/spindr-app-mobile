import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button 
        title = 'Matches'
        onPress = {() => navigate('Matches')} />
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