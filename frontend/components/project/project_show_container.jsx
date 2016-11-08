import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject, newRewardBuy } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  project: state.project,
  loggedIn: Boolean(state.session.currentUser),
  loading: state.loading
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.params.id;
  return {
    getProject: (id) => dispatch(getProject(id)),
    newRewardBuy: (reward_id, spent) => dispatch(newRewardBuy(reward_id, spent)),
    id
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
