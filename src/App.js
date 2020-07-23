import React, { Component } from 'react';

import Header from './components/Header';
import FlatList from './containers/FlatList';
import Map from './containers/Map';

import classes from './App.module.scss';

class App extends Component {

  render() {
    return (
        <div className={classes.App}>
            <Header/>
            <div className={classes.Main}>
              <FlatList />
              <Map />
            </div>
        </div>
      )
  }
}

export default App;
