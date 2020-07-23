import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectedFlat } from '../actions';

import classes from './Flat.module.scss';

class Flat extends Component {
  handleClick = (flat) => {
    // create a redux action
    this.props.selectedFlat(this.props.flat);

  }
  render() {
    return (
        <div className={classes.Flat} onClick={this.handleClick}>
          <div className={classes.product}>
            <img src={this.props.flat.imageUrl} alt={this.props.flat.imageUrl} />
            <div className={classes.infos}>
              <h2>{this.props.flat.name}</h2>
              <p>{this.props.flat.price}{this.props.flat.priceCurrency}</p>
            </div>
          </div>
        </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { selectedFlat: selectedFlat },
 dispatch
 );
}



export default connect(null, mapDispatchToProps) (Flat);
