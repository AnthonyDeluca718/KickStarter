export const NEW_PROJECT = "NEW_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const GET_PROJECT = "GET_PROJECT";
export const RECEIVE_CURRENT_PROJECT = "RECEIVE_CURRENT_PROJECT";
export const NEW_REWARD_BUY = "NEW_REWARD_BUY";
export const RECEIVE_FUNDING = "RECEIVE_FUNDING";
export const RECEIVE_SPENT = "RECEIVE_SPENT";

export const newProject = (data) => {
  return({
    type: NEW_PROJECT,
    data: data
  });
};

export const editProject = (project) => {
  return ({
    type: EDIT_PROJECT,
    project
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getProject = (id) => ({
  type: GET_PROJECT,
  id
});

export const receiveCurrentProject = (project) => ({
  type: RECEIVE_CURRENT_PROJECT,
  project
});

export const receiveFunding = (funding) => ({
  type: RECEIVE_FUNDING,
  funding
})

export const receiveSpent = (spent, success) => {
  return({
    type: RECEIVE_SPENT,
    spent,
    success
  })
}

export const newRewardBuy = (reward_id, spent) => {
  return ({
    type: NEW_REWARD_BUY,
    rewardBuy: {reward_id: reward_id},
    spent
  })
}
