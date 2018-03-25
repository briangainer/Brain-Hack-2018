import React, { Component } from 'react';
import { View, Slider } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import WhereAreYou from './check-in/WhereAreYou';
import Feeling from './check-in/Feeling';
import Strength from './check-in/Strength';

export default class CheckIn extends Component {
  constructor() {
    super();
    this.state = { screen: 1, value: 0.2 };
  }

  renderScreen() {
    switch (this.state.screen) {
      case 1:
        return (
          <View>
            <Text>Where are you?</Text>
            <Button transparent info onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Info</Text>
            </Button>
            <Button transparent onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Primary</Text>
            </Button>
            <Button transparent success onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Success</Text>
            </Button>
            <Button transparent warning onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Warning</Text>
            </Button>
            <Button transparent danger onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Danger</Text>
            </Button>
            <Button transparent dark onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Dark</Text>
            </Button>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>How are you feeling?</Text>
            <Button transparent info onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Info</Text>
            </Button>
            <Button transparent onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Primary</Text>
            </Button>
            <Button transparent success onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Success</Text>
            </Button>
            <Button transparent warning onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Warning</Text>
            </Button>
            <Button transparent danger onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Danger</Text>
            </Button>
            <Button transparent dark onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Dark</Text>
            </Button>
          </View>
        );
      case 3:
        return (
          <View>
            <Text>How intense are you feeling?</Text>
            <Slider
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
            />
            <Text>
              {this.renderMoodLabel(this.state.value)}
            </Text>
          </View>
        );
      default:
        return <Text>Finished, thank you</Text>
    }
  }

  renderMoodLabel(num) {
    if (num > .85) {
      return <Text>Intense</Text>
    }
    if (num > .60) {
      return <Text>Mild</Text>
    }
    if (num > .35) {
      return <Text>Something</Text>
    }
    return <Text>Low</Text>
  }

  render() {
    return (
      <Container>
        <Content style={styles.contentStyles}>
          {this.renderScreen()}

          { this.state.screen === 3 ?
            <Button iconRight light style={{alignSelf: 'flex-end'}} onPress={() => this.setState({ screen: this.state.screen+1 })}>
              <Text>Submit</Text>
              <Icon name='arrow-forward' />
            </Button>
            : false }
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
