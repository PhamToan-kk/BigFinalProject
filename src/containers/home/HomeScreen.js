import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export  class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text> Home </Text>
        </View>
      </SafeAreaView>
    );
  }
}
