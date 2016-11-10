import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import Loader from 'react-loader';

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
    let that = this;
    if (this.props.loggedIn) {
      var button = function(reward) {
        return(
          <button className="project-show-reward-el project-show-reward-button"
            onClick={() => {
              that.props.newRewardBuy(reward.id, reward.cost);
              }
            }
            >Back Project
          </button>
        );
      }
    } else {
      button = function() {
        return "";
      }
    }

		const style = {
      content : {
        margin: '150px auto 0 auto',
        width: '350px',
        height: '115px',
        border: '1px solid red'
      }, overlay: {

      }
    };

    return (
			<Loader loaded={!this.props.loading}>
				<div className="project-show-container group">

					<div className="project-show-left">
						<img className="project-show-head-photo" src={this.props.project.headPhotoUrl}></img>

						<div
							className="project-show-element project-show-description"
						>{this.props.project.description}</div>

					</div>

					<div className="project-show-right">

						<div className="project-show-title">{this.props.project.title}</div>

						<div className="project-show-element project-show-goal">Goal: {this.props.project.goal}</div>

						<div className="project-show-element project-show-funding">Toal Funding: {this.props.project.funding}</div>

						<text
							className="project-show-element project-show-date"
						>End Date: {this.props.project.endDate}</text>
					</div>


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
									{ button(reward) }
								</div>
								);
							}
						)}
					</div>

					<Modal
						isOpen={this.props.loading}
						onRequestClose={this.errorModalClose}
						style={style}
					>
						Yolo
					</Modal>

				</div>
			</Loader>
    )
  }
}

export default ProjectShow;
