import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    logout: () => dispatch(logout()),
    guestLogin: () => dispatch(login({user: {name: 'guest', password: 'password'}}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
