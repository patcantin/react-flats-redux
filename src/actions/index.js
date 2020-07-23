import flats from '../flats';

export function setFlats() {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'SET_FLATS',
 payload: flats
 }
}

export function selectedFlat(flat) {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'SELECTED_FLAT',
 payload: flat
 }
}
