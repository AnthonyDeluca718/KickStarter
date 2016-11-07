import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import SearchReducer from './search_reducer';
import LoadingReducer from './loading_reducer';

export default combineReducers({
  session: SessionReducer,
  project: ProjectReducer,
  search: SearchReducer,
  loading: LoadingReducer
});
