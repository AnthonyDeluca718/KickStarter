import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject } from '../../actions/project_actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname;
  const id = path[path.length-1];
  return {
    getProject: (id) => dispatch(getProject(id))
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
