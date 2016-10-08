import { receiveCurrentUser,
         receiveErrors,
         receiveProfile,
         EDIT_USER,
         EDIT_PROFILE,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout, editUser } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const userSuccessCallback = user => dispatch(receiveCurrentUser(user));
  const profileSucessCallback = profile => dispatch(receiveProfile(profile))
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
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
      editUser(action.user, profileSucessCallback, errorCallback);
      break;
    case SIGNUP:
      signup(action.user, userSuccessCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
