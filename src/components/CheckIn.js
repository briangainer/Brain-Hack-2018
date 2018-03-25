import React, { Component } from 'react';
import { View, TextInput, Slider, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import WhereAreYou from './check-in/WhereAreYou';
import Feeling from './check-in/Feeling';
import Strength from './check-in/Strength';

export default class CheckIn extends Component {
  constructor() {
    super();
    this.state = { screen: 1, value: 0.2, text1: '', text2: '', text3: '', locations: null };
    this.locations =  [
      { "name":"Home", "id":1, "pic":"home" },
      { "name":"Work", "id":2, "pic":"work" },
      { "name":"School", "id":3, "pic":"open-book" },
      { "name":"Social", "id":4, "pic":"open-book" },
      { "name":"Appointment", "id":5, "pic":"open-book" }
    ]
    this.feelings = [
      { "name":"Fear", "id":1 },
      { "name":"Anger", "id":2 },
      { "name":"Sadness", "id":3 },
      { "name":"Happiness", "id":4 },
      { "name":"Disgust", "id":5 },
      { "name":"Surprise", "id":6 },
      { "name":"Trust", "id":7 },
      { "name":"Anticipation", "id":8 },
      { "name":"Guilt", "id":9 }
    ]
  }

  renderLocations(arr) {
    return arr.map(item => {
      if (item.id == this.state.locations) {
        return (
          <View style={{ paddingTop: 10 }} key={item.id}>
            <TouchableOpacity
              style={{ borderColor: '#00008B', borderWidth: 1, borderRadius: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 60 }}
              onPress={ (item) => this.setState({ locations: item.id }) }>
              <Ionicons name={"md-checkmark-circle"} size={32} color="green" />
              <Text
                style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 55 }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )
      }
      return (
        <View style={{ paddingTop: 10 }} key={item.id}>
          <TouchableOpacity
            style={{ borderColor: '#E0FFFF', borderWidth: 1, borderRadius: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 60 }}
            onPress={ () => this.setState({ locations: item.id }) }>
            <Text
              style={{ paddingTop: 20, paddingBottom: 20 }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  renderScreen() {
    switch (this.state.screen) {
      case 1:
        return (
          <View>
            <Text style={{fontSize: 30}}>Where are you?</Text>
            <View style={{paddingTop: 20}} />
            {this.renderLocations(this.locations)}
            <View style={{paddingTop: 10}} />
            <TextInput
              placeholder={'Other location'}
              style={{height: 42, borderColor: 'gray', borderWidth: 2, paddingLeft: 10}}
              onChangeText={(text1) => this.setState({text1})}
              value={this.state.text1}
            />
            <View style={{paddingTop: 16}} />
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={{fontSize: 30}}>How are you feeling?</Text>
            <View style={{paddingTop: 10}} />
            {this.renderLocations(this.feelings)}
            <View style={{paddingTop: 10}} />
            <TextInput
              placeholder={'Feeling something different?'}
              style={{height: 42, borderColor: 'gray', borderWidth: 2, paddingLeft: 10}}
              onChangeText={(text2) => this.setState({text2})}
              value={this.state.text2}
            />
            <View style={{paddingTop: 16}} />
          </View>
        );
      case 3:
        return (
          <View>
            <Text style={{fontSize: 30}}>How intense are you feeling?</Text>
            <View style={{paddingTop: 10}} />
            <Slider
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
            />
            <Text>
              {this.renderMoodLabel(this.state.value)}
            </Text>
            <View style={{paddingTop: 15}} />
            <TextInput
              placeholder={'Explain in more detail ...'}
              style={{height: 42, borderColor: 'gray', borderWidth: 2, paddingLeft: 10}}
              onChangeText={(text3) => this.setState({text3})}
              value={this.state.text3}
            />
            <View style={{paddingTop: 16}} />
          </View>
        );
      default:
        return <Text style={{fontSize: 30}}>Finished, thank you</Text>
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

          { this.state.screen < 4 ?
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
