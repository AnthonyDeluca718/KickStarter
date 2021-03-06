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
        receiveSpent,
        NEW_REWARD_BUY
       } from '../actions/project_actions';

import { newProjectUtil, editProjectUtil, getProjectUtil, newRewardBuyUtil } from '../util/project_api_util';
import { hashHistory } from 'react-router';

export default ({getState, dispatch}) => next => action => {

  const newSuccessCallback = (project) => {
    let rewards = JSON.parse(project.rewards);
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
    console.log("adding rewards")
    dispatch(receiveCurrentProject(project))
  };

  const getSuccessCallback = (project) => {
    console.log("get");
    dispatch(receiveCurrentProject(project))
  }

  const getFundingCallback = (spent) => {
    return(
      function() {
        dispatch(receiveFunding(spent));
      }
    )
  }

  const errorCallback = response => {
    const errors = response;
    dispatch(receiveErrors(errors));
  };

  const getError = () => {
    hashHistory.push('/error');
  }

  switch(action.type){
    case NEW_REWARD_BUY:
      newRewardBuyUtil(action.rewardBuy, getFundingCallback(action.spent));
      return next(action);
    case NEW_PROJECT:
      newProjectUtil(action.data, newSuccessCallback, errorCallback)
      return next(action);
    case GET_PROJECT:
      getProjectUtil(action.id, getSuccessCallback, getError)
    default:
      return next(action);
  }
};
