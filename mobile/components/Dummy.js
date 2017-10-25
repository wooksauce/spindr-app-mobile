import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dummyActions from '../actions/dummyAction';

class Dummy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mark sucks my toto</Text>
        <Button 
        title='teehee'
        onPress = {() => this.props.actions.doSomething()} />
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

const dummyState = (store) => {
  return {
    dummy: store.Dummy.val
  }
}

const dummyDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(dummyActions, dispatch)
  }
};

export default connect(dummyState, dummyDispatch)(Dummy);

// export default Dummy;
