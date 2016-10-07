import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { edit } from '../../actions/session_actions';
import merge from 'lodash/merge';

const mapStateToProps = (state) => {
  if (state.session.currentUser) {
    let user = state.session.currentUser;
    return ({
      id: user.id,
      bio: user.bio,
      photo_url: user.photo_url
    })
  } else {
    return({
      id: "",
      bio: ""
    })
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
