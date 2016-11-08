export const editProjectUtil = (project, success, error) => {
  $l.ajax({
    method: 'GET',
    url: '/api/projects/edit',
    data: user,
    success,
    error
  });
};

export const getProjectUtil = (id, success, error) => {
  $l.ajax({
    method: 'GET',
    url: `/api/projects/${id}`,
    success,
    error
  });
};

export const newProjectUtil = (data, success, error) => {
  $l.ajax({
    method: 'POST',
    url: '/api/projects',
    data: data,
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const showProjectUtil = (project, sucecess, error) => {
  $l.ajax({
    method: 'GET',
    url: '/api/projects/edit',
    data: {project: project},
    success,
    error
  });
};

export const newRewardBuyUtil = (rewardBuy, success) => {
  $l.ajax({
    method: 'Post',
    url: '/api/reward_buys',
    data: {reward_buy: rewardBuy},
    success: success
  });
};
