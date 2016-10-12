import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  project: state.project,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.params.id;
  return {
    getProject: (id) => dispatch(getProject(id)),
    id
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
