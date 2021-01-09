import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ Provider } from 'react-redux'
import {createStore} from './reducks/store/store'
import {ConnectedRouter} from 'connected-react-router'
import * as History from 'history'

export const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
