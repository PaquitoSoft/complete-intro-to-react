import axios from 'axios';
import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions';

export function setSearchTerm (searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    searchTerm
  };
}

export function addOmdbData (imdbId, omdbData) {
  return { type: ADD_OMDB_DATA, imdbId, omdbData };
}

export function getOmdbDetails (imdbID) {
  return (dispatch) => {
    axios.get(`https://www.omdbapi.com/?i=${imdbID}`)
      .then(response => {
        dispatch(addOmdbData(imdbID, response.data));
      })
      .catch(error => console.error('Axios error', error));
  };
}
