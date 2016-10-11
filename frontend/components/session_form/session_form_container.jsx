import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup, editUser } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => {
  return({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  });
}


const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    changeProfile: user => dispatch(editUser(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
