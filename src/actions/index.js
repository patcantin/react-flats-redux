// import flats from '../flats';

export const SET_FLATS = 'SET_FLATS';
export const SELECTED_FLAT = 'SELECTED_FLAT';

export function setFlats() {
 // To use for local .js file that simulate a DB (with the import above)
 // return {
 // type: 'SET_FLATS',
 // payload: flats
 // }

 //USE this to FETCH from an API (GET)
 return fetch('https://raw.githubusercontent.com/patcantin/react-flats-redux/master/src/flats.json')
    .then(response => response.json())
    .then((data) => {
    return {
      type: SET_FLATS,
      payload: data
    };
  });
}

export function selectFlat(flat) {
 // TODO: Api call! For now, simulate a DB
 return {
 type: SELECTED_FLAT,
 payload: flat
 }
}
