import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class Respond extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.contentStyles}>

          <Text>Crisis</Text>

        </Content>
      </Container>
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
