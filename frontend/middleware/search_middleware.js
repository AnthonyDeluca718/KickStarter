import { RECEIVE_SEARCH, GET_SEARCH, GET_CATEGORY } from '../actions/search_actions';
import { receiveSearch } from '../actions/search_actions';
import { getCategoryUtil, getSearchUtil } from '../util/search_api_util';



const SearchMiddleware = ({getState, dispatch}) => next => action => {
    switch(action.type){
      case GET_SEARCH:
        const success = search => dispatch(receiveSearch(search));
        getSearchUtil(success,action.data);
        return next(action);
      case GET_CATEGORY:
        const catSuccess = search => dispatch(receiveSearch(search));
        getCategoryUtil(catSuccess, action.category);
        return next(action);
      default:
        return next(action);
    }
  };

export default SearchMiddleware;
