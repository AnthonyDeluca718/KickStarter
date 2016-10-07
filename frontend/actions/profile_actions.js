export const EDIT = "EDIT";
export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const edit = user => ({
  type: EDIT,
  user,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const receiveCurrentProfile = errors => ({
  type: RECEIVE_CURRENT_PROFILE,
  profile
})
