import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class ProjectShow extends React.Component {

	constructor(props) {
		super(props);
    let today = new Date();
		this.state = {
			title: this.props.project.title,
			headPhotoUrl: this.props.project.headPhotoUrl,
      goal: this.props.project.goal,
      description: this.props.project.description,
      endDate: this.props.project.endDate,
      modalOpen: false,
      user_id: 1
		};
	}

  componentDidMount() {
    this.props.getProject(this.props.id);
    debugger
    "blurb"
  }

  render() {
    return (
      <div className="project-show-container">
        <text className="project-show-title">{this.state.title}</text>

        <a className="project-show-head-photo" href={this.state.headPhotoUrl}></a>

        <div className="project-show-goal">{this.state.goal}</div>

        <text
          className="project-show-decription"
        >{this.state.description}</text>

        <text
          className="project-show-date"
        >{this.state.endDate}</text>
      </div>
    )
  }
}

export default ProjectShow;
