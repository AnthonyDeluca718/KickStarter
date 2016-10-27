import { receiveCurrentUser,
         receiveErrors,
         receiveProfile,
         EDIT_USER,
         EDIT_PROFILE,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';
import { NEW_REWARD_BUY, receiveSpent } from '../actions/project_actions';

import { login, signup, logout, editUser } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const userSuccessCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = response => {
    debugger
    const errors = response;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case LOGIN:
      login(action.user, userSuccessCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case EDIT_PROFILE:
      editUser(action.data, userSuccessCallback, errorCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, userSuccessCallback, errorCallback);
      return next(action);
    case NEW_REWARD_BUY:
      dispatch(receiveSpent(action.cost));
      return next(action);
    default:
      return next(action);
  }
};
