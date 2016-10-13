import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject, newRewardBuy } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  project: state.project,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.params.id;
  return {
    getProject: (id) => dispatch(getProject(id)),
    newRewardBuy: (user_id, reward_id, cost) => dispatch(newRewardBuy(user_id, reward_id, cost)),
    id
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
