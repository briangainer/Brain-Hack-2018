import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class Resources extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.contentStyles}>

          <Text>Resources</Text>

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
