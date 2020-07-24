//The reducer receive an action and a current state

const selectedFlatReducer = (state, action)  => {
  if (state === undefined){
    return null;
  }


  // Same as below
  // if (action.type === 'SELECTED_FLAT') {
  //   return action.payload;  // to update the state
  // } else {
  //   return state; // return the current state
  // }

  // Same as above
  switch(action.type) {
    case 'SELECTED_FLAT':
      return action.payload; //returns the new state in the store
    default:
      return state;
  }
}

export default selectedFlatReducer;
