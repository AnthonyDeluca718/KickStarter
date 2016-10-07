import { RECEIVE_ERRORS, RECEIVE_CURRENT_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';


const nullProfile = {
  bio: "",
  photo_url: ""
}

const ProfileReducer = (state = nullProfile, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_PROFILE:
      const profile = action.profile;
      return merge({}, nullProfile, {
        profile
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      let newState= merge({}, _nullUser, {
        errors: action.errors
      });
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;
