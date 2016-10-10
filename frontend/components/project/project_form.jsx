import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class ProjectForm extends React.Component {
  const
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
		this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
	}

	componentDidUpdate() {
	}

  componentWillReceiveProps(nextProps) {
  }

	redirectIfLoggedIn(){
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const project = {
      title: this.state.title,
      user_id: this.state.user_id,
      target: this.state.goal,
      description: this.state.description,
      end_date: this.state.endDate,
      head_photo_url: this.state.headPhotoUrl
    };
		this.props.processForm(project);
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  onModalClose() {
    this.setState({modalOpen : false});
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
  		<div className="project-form-container">
  			<form onSubmit={this.handleSubmit} className="login-form-box">
  				<input type="text"
  					value={this.state.title}
  					onChange={this.update("title")}
  					className="project-input project-title"
            placeholder="Title" />

          <input type="text"
  					value={this.state.headPhotoUrl}
  					onChange={this.update("headPhotoUrl")}
  					className="project-input project-head-photo-url"
            placeholder = "Head Photo Url"/>

          <input type="number"
  					value={this.state.goal}
  					onChange={this.update("goal")}
  					className="project-input project-goal"
            placeholder = "Project Goal"/>


          <input type="text"
            value={this.state.description}
            onChange={this.update("description")}
            className="project-input project-descripton"
            placeholder="Description"
            />

          <input type="date"
            value={this.state.endDate}
            onChange={this.update("endDate")}
            className="project-input project-date"
          />

        <input className="project-input project-button" type="submit" value="Create Project" />

  			</form>

  		</div>
    );
  }

}

export default ProjectForm;
