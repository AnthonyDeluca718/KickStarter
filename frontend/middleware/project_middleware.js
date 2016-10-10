import {
        NEW_PROJECT,
        EDIT_PROJECT,
        RECEIVE_ERRORS,
        RECEIVE_CURRENT_PROJECT,
        receiveCurrentProject,
        receiveErrors
       } from '../actions/project_actions';

import { newProjectUtil, editProjectUtil } from '../util/project_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (project) => dispatch(receiveCurrentProject(project));
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
