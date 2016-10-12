import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { newProject } from '../../actions/project_actions';


const mapStateToProps = (state) => {
  return ({
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (project) => {
      rewards = project.rewards;
      if (rewards.length > 0) {
        for(let i=0; i<rewards.length; i++) {
          $.ajax({
          	method: "Post",
          	url: "/api/rewards/",
          	data: {reward: reward},
          	success: function() {
              if (i=rewards.length) {
                dispatch(newProject(project));
              }
              return;
            }
          })
        }
      } else {
        dispatch(newProject(project));
      }
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
