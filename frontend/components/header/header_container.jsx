import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  spent: session.spent,
  photo_url: session.photo_url
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
