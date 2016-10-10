import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { newProject } from '../../actions/project_actions';


const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (project) => dispatch(newProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
