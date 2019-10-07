import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InitialPage from './src/screens/initialpage'
import Login from './src/screens/Login'
import Dashboard from './src/screens/dashboard'
import React from 'react'
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
console.disableYellowBox = true


const AppStack = createStackNavigator({ Dashboard: Dashboard });
const AuthStack = createStackNavigator({ Login: Login });
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: InitialPage,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);


export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <AppContainer />
    </Provider>
    );
  
}
}