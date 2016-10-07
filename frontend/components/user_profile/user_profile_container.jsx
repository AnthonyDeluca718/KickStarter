import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { edit } from '../../actions/session_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state) => {

  let obj = {
    bio: state.profile.bio,
    photo_url: state.profile.photo_url
  }

  if (state.session.currentUser) {
    merge(obj, {id: state.session.currentUser});
  }

  return (obj)
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(edit(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
