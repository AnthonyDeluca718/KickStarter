export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const signup = user => ({
  type: SIGNUP,
  user
});

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const editProfile = (formData) => ({
  type: EDIT_PROFILE,
  data: formData
})
