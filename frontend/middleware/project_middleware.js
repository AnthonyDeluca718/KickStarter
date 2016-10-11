import {
        NEW_PROJECT,
        EDIT_PROJECT,
        RECEIVE_ERRORS,
        RECEIVE_CURRENT_PROJECT,
        GET_PROJECT,
        getProject,
        receiveCurrentProject,
        receiveErrors
       } from '../actions/project_actions';

import { newProjectUtil, editProjectUtil, getProjectUtil } from '../util/project_api_util';
import { hashHistory } from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (project) => {
    hashHistory.push(`/projects/${project.id}`)
    dispatch(receiveCurrentProject(project))
  };

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case NEW_PROJECT:
      newProjectUtil(action.project, successCallback, errorCallback)
      return next(action);
    case GET_PROJECT:
      getProjectUtil(action.id, successCallback, errorCallback)
    default:
      return next(action);
  }
};
