import React, { Component } from 'react';
import { Root, Tabs } from './config/router';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import reducers from './reducers'
import {apiMiddleware} from './actions'

import {GET_ALL_DATA} from './config/types'

const store = createStore(reducers, {}, applyMiddleware(apiMiddleware));
store.dispatch({type: GET_ALL_DATA});

class App extends Component {
  render() {
    return (
    <Provider store={store}>
        <Root />
    </Provider>
    )
  }
}

export default App;