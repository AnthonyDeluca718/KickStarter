import { EDIT
       } from '../actions/profile_actions';

import { edit, receiveErrors, receiveCurrentProfile } from '../util/profile_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentProfile(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case EDIT:
      edit(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
