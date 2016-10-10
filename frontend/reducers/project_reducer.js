import { RECEIVE_CURRENT_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const _emptyProject = {
  title: "",
  headPhotoUrl: "",
  goal: 0,
  description: "",
  endDate: (new Date()).toISOString().split('T')[0],
  modalOpen: false,
}
const ProjectReducer = (state = _emptyProject, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_PROJECT:
      return merge({}, state, action.project);
    default:
      return state;
  }
};

export default ProjectReducer;
