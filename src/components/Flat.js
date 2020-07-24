import React, { Component } from 'react';

import classes from './Flat.module.scss';

class Flat extends Component {

  render() {
    return (
        <div className={classes.Flat}>
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

export default Flat;
