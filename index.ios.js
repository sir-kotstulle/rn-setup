/**
 * Simple Project Setup using React Native and Redux
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { testReducer } from './Redux/reducers';
import HomeContainer from './Containers/HomeContainer';

let logger = createLogger();
let store = createStore(
    testReducer,
    applyMiddleware(thunk, promise, logger)
);

class setup extends Component {

    render() {
        return (
            <Provider store={store}>
                <HomeContainer />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('setup', () => setup);
