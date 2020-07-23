import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
 flats: flatsReducer,
 selectedFlat: selectedFlatReducer
});

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
