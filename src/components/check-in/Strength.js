import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class Strength extends Component {
  render() {
    return (
          <Text>How strong is your feeling?</Text>
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
