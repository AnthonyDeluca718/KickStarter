import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { edit } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({

  bio: currentUser.bio,
  photo_url: currentUser.photo_url,
  id: currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(edit(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
