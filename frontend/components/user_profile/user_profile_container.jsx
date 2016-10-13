import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { editProfile } from '../../actions/session_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state) => {
  return ({
    bio: state.session.currentUser.bio,
    id: state.session.currentUser.id,
    avatar_url: state.session.photo_url
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(editProfile(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
