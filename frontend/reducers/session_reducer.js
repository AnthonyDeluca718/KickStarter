import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS, RECEIVE_PROFILE } from '../actions/session_actions';
import merge from 'lodash/merge';

const _null = Object.freeze({
  currentUser: null,
  errors: [],
  modalOpen: false,
  profile: {bio: "", photo_url: ""}
});

const SessionReducer = (state = _null, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let obj = merge({}, _null);
      obj.currentUser = action.currentUser;
      obj.profile = {bio: action.currentUser.bio, photo_url: action.currentUser.photo_url};
      return obj;
    case LOGOUT:
      return merge({}, _null);
    case RECEIVE_ERRORS:
      let newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case RECEIVE_PROFILE:
      newState = merge({}, state);
      obj.profile = action.profile;
      return obj;
    default:
      return state;
  }
};

export default SessionReducer;
