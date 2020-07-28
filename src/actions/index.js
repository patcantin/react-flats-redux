// import flats from '../flats';

export function setFlats() {
 // TODO: Api call! For now, simulate a DB
 // return {
 // type: 'SET_FLATS',
 // payload: flats
 // }
 //USE this to FETCH from an API (GET)
 return fetch('https://raw.githubusercontent.com/patcantin/react-flats-redux/master/src/flats.js')
    .then(response => response.json())
    .then((data) => {
    return {
      type: 'SET_FLATS',
      payload: data
    };
  });
}

export function selectFlat(flat) {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'SELECTED_FLAT',
 payload: flat
 }
}
