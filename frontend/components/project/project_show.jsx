import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class ProjectShow extends React.Component {

	constructor(props) {
		super(props);
    this.state = {
      project: {
        rewards: []
      }
    }
	}

  componentDidMount() {
    this.props.getProject(this.props.id);
    const that=this;
    $.ajax({
      method: 'GET',
      url: `api/projects/${that.props.id}`,
      success: function(response) {
        debugger
        that.setState({project: response});
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id != nextProps.id) {
      this.props.getProject(this.props.id);
    }
  }

  render() {
    if (this.props.loggedIn) {
      var button = function() {
        return(
          <div className="project-show-reward-el project-show-reward-button">backButton</div>
        );
      }
    } else {
      button = function() {
        return "";
      }
    }
    return (
      <div className="project-show-container">
        <text className="project-show-element project-show-title">{this.props.project.title}</text>

        <img className="project-show-head-photo" src={this.props.project.headPhotoUrl}></img>

        <div className="project-show-element project-show-goal">{this.props.project.goal}</div>

        <div
          className="project-show-element project-show-description"
        >{this.props.project.description}</div>

        <text
          className="project-show-element project-show-date"
        >{this.props.project.endDate}</text>

      <div className="project-show-rewards" >

        <h1 className="show-rewards-section-title">Rewards</h1>
        {this.state.project.rewards.map(
          function(reward) {
            let limit;
            if (reward.limit) {
              limit = reward.limit;
            } else {
              limit = "unlimited";
            }

            return(
            <div key={reward.id} className="project-show-reward">
              <div className="project-show-reward-el project-show-reward-title">{reward.title}</div>
              <div className="project-show-reward-el project-show-reward-body">{reward.body}</div>
              <div className="project-show-reward-el project-show-reward-cost">{`Cost: ${reward.cost}`}</div>
              <div className="project-show-reward-el project-show-reward-limit">{`Limit: ${limit}`}</div>
              { button() }
            </div>
            );
          }
        )}
      </div>
    </div>
    )
  }
}

export default ProjectShow;
