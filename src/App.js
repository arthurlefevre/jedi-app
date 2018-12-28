import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screen/home';
import Add from './screen/add';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

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
