import React, { Component } from 'react';

//import Flat from './containers/Flat';
import IconMap from '../assets/images/maps.png';
import classes from './Header.module.scss';

class Header extends Component {

  render() {
    return (
        <div className={classes.Header}>
          <img src={IconMap} alt=""/>
          <h1>Flat Selector</h1>
        </div>
      )
  }
}

export default Header;
