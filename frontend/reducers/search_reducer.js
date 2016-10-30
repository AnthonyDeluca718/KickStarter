import { RECEIVE_SEARCH } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default SearchReducer;
