import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _null = Object.freeze({
  currentUser: null,
  errors: [],
  modalOpen: false,
  photo_url: "",
  spent: 0
});

const SessionReducer = (state = _null, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let obj = merge({}, _null, state);
      obj.photo_url = action.currentUser.photo_url;
      obj.spent = action.currentUser.spent;
      obj.currentUser = merge(state.currentUser, action.currentUser);
      return obj;
    case LOGOUT:
      return merge({}, _null);
    case RECEIVE_ERRORS:
      let newState = merge({}, _null, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
