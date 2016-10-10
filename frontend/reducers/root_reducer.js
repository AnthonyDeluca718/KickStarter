import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';

export default combineReducers({
  session: SessionReducer
});
