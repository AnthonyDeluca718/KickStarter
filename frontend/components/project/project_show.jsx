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

  componentWillReceiveProps(nextProps) {
    if (this.props.id != nextProps.id) {
      this.props.getProject(this.props.id);
    }
  }

  render() {
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
      </div>
    )
  }
}

export default ProjectShow;
