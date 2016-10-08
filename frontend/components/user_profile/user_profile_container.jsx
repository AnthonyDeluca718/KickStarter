import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { editUser } from '../../actions/profile_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state) => {
  debugger
  return ({
    bio: state.profile.bio,
    photo_url: state.profile.photo_url
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(editProfile(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
