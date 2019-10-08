import React from 'react';
import {
  ActivityIndicator,
  Text,
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
      <View style={styles.container}>
        {/* <ActivityIndicator /> */}
        <Text style={styles.loading}>Loading</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default InitialPage;
const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#82B2B8', 
    justifyContent: 'center',
    alignContent:'center'
  },
  loading:{
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  }
})