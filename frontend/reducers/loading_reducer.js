import { RECEIVE_SEARCH } from '../actions/search_actions';
import {RECEIVE_SPENT} from '../actions/project_actions';

const LoadingReducer = (state = false, action) => {
  switch(action.type){
    case "GET_PROJECT":
    case "EDIT_PROFILE":
    case "NEW_REWARD_BUY":
    case "NEW_PROJECT":
    case "NOW_LOADING":
      console.log(action.type);
      return true;
    case "RECEIVE_CURRENT_PROJECT":
    case "RECEIVE_CURRENT_USER":
    case "END_LOADING":
    case "RECEIVE_FUNDING":
      console.log(action.type);
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
