export const NEW_PROJECT = "NEW_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const GET_PROJECT = "GET_PROJECT";
export const RECEIVE_CURRENT_PROJECT = "RECEIVE_CURRENT_PROJECT";

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

export const getProject = (id) => ({
  type: GET_PROJECT,
  id
});

export const receiveCurrentProject = (project) => ({
  type: RECEIVE_CURRENT_PROJECT,
  project
});
