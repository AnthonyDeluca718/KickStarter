import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { editProfile } from '../../actions/session_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state) => {
  return ({
    bio: state.session.currentUser.bio,
    photo_url: state.session.currentUser.photo_url,
    id: state.session.currentUser.id
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
