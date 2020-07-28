import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger'; // to obtain logs in the browser console about previous/new states
import reduxPromise from 'redux-promise'; //to make the action recognize the fetch as a promise (Ajax requests)

import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
 flats: flatsReducer,
 selectedFlat: selectedFlatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

//same as above but without redux-devTools
// const middlewares = applyMiddleware(logger);

ReactDOM.render(
  //<React.StrictMode>
  // the {} means empty state for the beginning
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    }
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
