import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { edit } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return (
    {
      bio: state.profile.bio,
      photo_url: state.profile.photo_url
    }
  )
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
