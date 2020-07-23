//The reducer receive an action and a current state

const flatsReducer = (state, action)  => {
  if (state === undefined){
    return [];
  }


  // Same as below
  // if (action.type === 'SET_FLATS') {
  //   return action.payload;  // to update the state
  // } else {
  //   return state; // return the current state
  // }

  // Same as above
  switch(action.type) {
    case 'SET_FLATS':
      return action.payload; //returns the new state in the store
    default:
      return state;
  }
}

export default flatsReducer;
