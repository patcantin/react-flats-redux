import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';
//import classes from './Flat.module.scss';
import './flat2.css';


class Flat extends Component {

  handleClick = () => {
    // create a redux action
    this.props.selectFlat(this.props.flat); // this.props.selectFlat from actions.js


  }
  render() {

    let clas = "Flat";
    if (this.props.flat === this.props.selectedFlat) { // this.props.selectedFlat from selectedFlatReducer (see mapReduxStateToProps below)
      clas += " selected";
    }

    return (
        <div className={clas} onClick={this.handleClick}>
          <div class="card-trip">
          <iframe src={this.props.flat.view}></iframe>
            <div class="card-trip-infos">
              <div>
              <h2>{this.props.flat.name}</h2>
              <p>{this.props.flat.direction}</p>
              <p>{this.props.flat.area}</p>
            </div>
          </div>
        </div>
         </div>

      )
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { selectFlat },
 dispatch
 );
}

function mapReduxStateToProps(reduxState) {
 return {
 selectedFlat: reduxState.selectedFlat
 };
}



export default connect(mapReduxStateToProps, mapDispatchToProps) (Flat);
