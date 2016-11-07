import { RECEIVE_SEARCH } from '../actions/search_actions';

const LoadingReducer = (state = false, action) => {
  switch(action.type){
    case "GET_PROJECT":
      return true;
    case "RECEIVE_CURRENT_PROJECT":
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
