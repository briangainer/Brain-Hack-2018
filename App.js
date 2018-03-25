import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Share from './src/screens/Share';
import Respond from './src/screens/Respond';
import Log from './src/screens/Log';
import Resources from './src/screens/Resources';
import Settings from './src/screens/Settings';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'share', title: 'Share' },
      { key: 'respond', title: 'Respond' },
      { key: 'log', title: 'Log' },
      { key: 'resources', title: 'Resources' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    share: () => <Share />,
    respond: () => <Respond />,
    log: () => <Log />,
    resources: () => <Resources />,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
  },
});
