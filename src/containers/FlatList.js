import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './Flat';

import classes from './FlatList.module.scss';

class FlatList extends Component {

  componentWillMount () {
    this.props.setFlats(); //triggering the action
  }

  render() {
    return (
        <div className={classes.FlatList}>
          {this.props.flats.map((flat) => <Flat flat= {flat} key={flat.id} />)}
        </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setFlats: setFlats },
 dispatch
 );
}

function mapReduxStateToProps(reduxState) {
 return {
 flats: reduxState.flats // update this.props.flats for the .map above
 };
}

export default connect(mapReduxStateToProps, mapDispatchToProps) (FlatList);
