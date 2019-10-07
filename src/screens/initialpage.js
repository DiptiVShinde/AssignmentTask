import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class InitialPage extends React.Component {
  componentDidMount() {
    this.getInitialPage();
  }
  getInitialPage = async () => {
    const userToken = await AsyncStorage.getItem('token');
    this.props.navigation.navigate(userToken!==null ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default InitialPage;