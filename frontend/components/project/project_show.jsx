import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class ProjectShow extends React.Component {

	constructor(props) {
		super(props);
    let today = new Date();
		this.state = {
			title: "",
			headPhotoUrl: "",
      goal: 0,
      description: "",
      endDate: today.toISOString().split('T')[0],
      modalOpen: false,
      user_id: 1
		};
	}

  render() {
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
      <div className="project-show-container">
        <text className="project-show-title">{this.state.title}</text>

        <a className="project-show-head-photo" href={this.state.headPhotoUrl}></a>

        <div className="project-show-goal">{this.state.goal}</div>

        <text
          className="project-show-decription"
        >{this.state.description}</text>

        <text
          className="project-show-date"
        >{this.state.projectDate}</text>
      </div>
    )
  }
}
