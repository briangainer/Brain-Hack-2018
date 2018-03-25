import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Body } from 'native-base';

export default class Feeling extends Component {
  render() {
    return (
      <View>
        <Text>How are you feeling?</Text>

          
      </View>
    );
  }
}

const styles = {
  contentStyles: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  }
};
