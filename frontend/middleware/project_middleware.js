import {
        NEW_PROJECT,
        EDIT_PROJECT,
        RECEIVE_ERRORS,
        RECEIVE_CURRENT_PROJECT,
        GET_PROJECT,
        getProject,
        receiveCurrentProject,
        receiveErrors,
        receiveFunding,
        NEW_REWARD_BUY
       } from '../actions/project_actions';

import { newProjectUtil, editProjectUtil, getProjectUtil } from '../util/project_api_util';
import { hashHistory } from 'react-router';

export default ({getState, dispatch}) => next => action => {

  const newSuccessCallback = (project) => {
    let rewards = project.rewards;
    Object.keys(rewards).forEach(
      function(key) {
      let reward = rewards[key];
      reward.project_id = project.id;
      $.ajax({
      	method: "Post",
      	url: "/api/rewards",
      	data: {reward: reward}
      })
    })
    hashHistory.push(`/projects/${project.id}`)
    dispatch(receiveCurrentProject(project))
  };

  const getSuccessCallback = (project) => {
    dispatch(receiveCurrentProject(project))
  }

  const newRewardBuyCallback = (funding) => ({
    dispatch(receiveFunding(funding));
  })

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  const getError = () => {
    hashHistory.push('/error');
  }

  switch(action.type){
    case NEW_REWARD_BUY:
      newRewardBuyUtil(action.rewardBuy, newSuccessCallback, errorCallback)
    case NEW_PROJECT:
      newProjectUtil(action.project, newSuccessCallback, errorCallback)
      return next(action);
    case GET_PROJECT:
      getProjectUtil(action.id, getSuccessCallback, getError)
    default:
      return next(action);
  }
};
