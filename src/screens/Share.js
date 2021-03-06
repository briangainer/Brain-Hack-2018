import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Body, Icon } from 'native-base';
import CheckIn from '../components/CheckIn';
import Crisis from '../components/Crisis';
import Reflection from '../components/Reflection';

export default class Share extends Component {
  constructor() {
    super();
    this.state = { window: null };
    this.renderScreen = this.renderScreen.bind(this);
  }

  renderScreen() {
    switch(this.state.window) {
    case 'check_in':
      return <CheckIn />
    case 'reflection':
      return <CheckIn />
    case 'crisis':
      return <CheckIn />
    default:
      return (
        <Card>
          <CardItem header>
            <Text style={{ fontSize: 20 }}>Share your thoughts</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Button block onPress={() => this.setState({ window: 'check_in' })}>
                <Text style={{ fontSize: 25, paddingBottom: 10, paddingTop: 20 }}>Check in</Text>
              </Button>
              <View style={{ paddingBottom: 18 }} />
              <Button block warning onPress={() => this.setState({ window: 'reflection' })}>
                <Text style={{ fontSize: 25, paddingBottom: 10, paddingTop: 20 }}>Reflection</Text>
              </Button>
              <View style={{ paddingBottom: 18 }} />
              <Button block danger onPress={() => this.setState({ window: 'crisis' })}>
                <Text style={{ fontSize: 25, paddingBottom: 10, paddingTop: 20 }}>Crisis</Text>
              </Button>
              <View style={{ paddingBottom: 18 }} />
            </Body>
          </CardItem>
       </Card>
      );
    }
  }

  render() {
    return (
      <Container>
        <Content style={styles.contentStyles}>
          {this.state.window !== null ?
            <Button iconLeft light onPress={() => this.setState({ window: null })}>
              <Icon name='arrow-back' />
                <Text>Back</Text>
            </Button>
            : false}
          {this.renderScreen()}
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
