import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screen/home';
import Add from './screen/add';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';

const client = axios.create({
  baseURL: 'http://localhost:3001',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Navigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Add: {
    screen: Add,
  },
});

const AppContainer = createAppContainer(Navigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
