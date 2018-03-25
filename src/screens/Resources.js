import React, { Component } from 'react';
import { TouchableOpacity, Linking, View } from 'react-native';
import { Container, Header, Content, Button, Text, List, ListItem } from 'native-base';

export default class Resources extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.contentStyles}>
          <Text style={{ paddingBottom: 20, fontSize: 20 }}>Click on the links to access online resources</Text>
          <List>
            <ListItem itemDivider>
              <Text>Information</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://psychcentral.com/resources")}>
                <Text>PsychCentral</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.apa.org/")}>
                <Text>American Psychological Association</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.psych.org/")}>
                <Text>American Psychiatric Association</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.psychologytoday.com/magazine")}>
                <Text>Psychology Today</Text>
              </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider>
              <Text>Organizations</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.nami.org/")}>
                <Text>National Association of Mental Illness</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.mhresources.org/")}>
                <Text>Mental Health Resources, Inc.</Text>
              </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider>
              <Text>Government</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.nlm.nih.gov/medlineplus/mentalhealth.html")}>
                <Text>National Institutes of Health</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.who.int/mental_health/evidence/atlas/en/")}>
                <Text>World Health Organization</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.mentalhealth.gov/")}>
                <Text>U.S. Department of Health and Human Services</Text>
              </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider>
              <Text>Diagnostic Resources</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.dsm5.org/Pages/Default.aspx")}>
                <Text>Diagnostic and Statistical Manual of Mental Disorders</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.mayoclinic.org/diseases-conditions/mental-illness/basics/definition/con-20033813")}>
                <Text>Mayo Clinic</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.mentalhealthscreening.org/")}>
                <Text>Screening for Mental Health</Text>
              </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider>
              <Text>Military/Veterans</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.mentalhealth.va.gov/")}>
                <Text>Veterans Affairs</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://www.nami.org/Template.cfm?Section=Veterans_Resources&Template=/ContentManagement/ContentDisplay.cfm&ContentID=53242&lstid=877")}>
                <Text>National Association on Mental Illness</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.militarymentalhealth.org/")}>
                <Text>Military Pathways</Text>
              </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider>
              <Text>Youth, Teens, School and College Students</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
                <Text>Office of Adolescent Health</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
                <Text>The Jed Foundation</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
                <Text>Youth.gov</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
                <Text>ULifeline</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
                <Text>LawLifeline</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
                <Text>School Mental Health Project</Text>
              </TouchableOpacity>
            </ListItem>
          </List>
          <View style={{ paddingBottom: 20 }} />
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
