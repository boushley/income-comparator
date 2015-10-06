'use strict';

import {render} from 'react';
import Comparison from './components/comparison';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import comparisonApp from './reducers/root';

require('./styles/app.less');

let store = createStore(comparisonApp);
let rootElement = document.getElementById('content');

React.render(
  <Provider store={store}>
    {() => <Comparison />}
  </Provider>,
  rootElement
);
