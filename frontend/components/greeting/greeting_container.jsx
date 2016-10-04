import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch,ownProps) => {
  const oProps = ownProps;

  return {
    logout: () => dispatch(logout()),
    oProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
