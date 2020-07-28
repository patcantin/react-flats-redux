import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger'; // to obtain logs in the browser console about previous/new states
import reduxPromise from 'redux-promise';

import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
 flats: flatsReducer,
 selectedFlat: selectedFlatReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
