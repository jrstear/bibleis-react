import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './src/reducers';
import AppNavigator from './src/components/Navigation';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(Thunk))}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
