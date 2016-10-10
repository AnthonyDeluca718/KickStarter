export const NEW_PROJECT = "NEW_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const RECEIVE_ERRORS = "RECEIVe_ERRORS"

export const newProject = (project) => {
  return({
    type: NEW_PROJECT,
    project
  })
};

export const editProject = (project) => {
  return ({
    type: EDIT_PROJECT,
    project
  })
}

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
