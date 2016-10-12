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
  let newState;
  let proj;
  switch(action.type) {
    case RECEIVE_CURRENT_PROJECT:
      newState = merge({}, state);
      proj = action.project;
      newState.title = proj.title;
      newState.headPhotoUrl = proj.head_photo_url;
      newState.goal = proj.goal;
      newState.description = proj.description;
      newState.endDate = proj.end_date;
      newState.rewards = proj.rewards;
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;
