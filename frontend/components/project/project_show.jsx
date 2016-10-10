import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class ProjectShow extends React.Component {

	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.getProject(this.props.id);
  }

  componentWillReceiveProps() {
    this.props.getProject(this.props.id);
  }

  render() {
    return (
      <div className="project-show-container">
        <text className="project-show-title">{this.props.project.title}</text>

        <a className="project-show-head-photo" href={this.props.project.headPhotoUrl}></a>

        <div className="project-show-goal">{this.props.project.goal}</div>

        <text
          className="project-show-decription"
        >{this.props.project.description}</text>

        <text
          className="project-show-date"
        >{this.props.project.endDate}</text>
      </div>
    )
  }
}

export default ProjectShow;
