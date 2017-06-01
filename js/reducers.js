import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
};

function setSearchTerm (state, action) {
  return Object.assign(
    {},
    state,
    { searchTerm: action.searchTerm }
  );
}

function addOmdbData (state, action) {
  const newOMDBData = Object.assign(
    {},
    state.omdbData,
    { [action.imdbID]: action.omdbData }
  );

  return Object.assign(
    {},
    state,
    { omdbData: newOMDBData }
  );

  // return {
  //   ...state,
  //   omdbData: {
  //     ...state.omdbData,
  //     { [action.imdbID]: action.omdbData }
  //   }
  // };
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case ADD_OMDB_DATA:
      return addOmdbData(state, action);
    default:
      return state;
  }
};

export default rootReducer;
