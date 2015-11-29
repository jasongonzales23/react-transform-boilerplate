import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux'
import {changeColor} from './ColorReducer'

import {
  createStore,
  compose,
} from 'redux'
import { devTools, persistState } from 'redux-devtools';

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
  devTools(),
)(createStore)

let store = finalCreateStore(changeColor)

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
  , document.getElementById('root'));
