import {
        NEW_PROJECT,
        EDIT_PROJECT,
        RECEIVE_ERRORS,
        receiveErrors
       } from '../actions/project_actions';

import { newProjectUtil, editProjectUtil } from '../util/project_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = () => dispatch();
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case NEW_PROJECT:
      newProjectUtil(action.project, successCallback, errorCallback)
      return next(action);
    default:
      return next(action);
  }
};
