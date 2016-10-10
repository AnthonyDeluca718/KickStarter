import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class ProjectForm extends React.Component {
  const
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			hadPhoto: "",
      goal: 0,
      description: "",
      endDate: new Date(), 
      modalOpen: false
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
    debugger
		e.preventDefault();
		// const user = this.state;
		// this.props.processForm({user});
	}

	// renderErrors() {
	// 	return(
	// 		<ul>
	// 			{this.props.errors.map((error, i) => (
	// 				<li key={`error-${i}`}>
	// 					{error}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

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
  					value={this.state.titlePic}
  					onChange={this.update("titlePic")}
  					className="project-input project-title-pic"
            placeholder = "Head Photo Url"/>

          <input type="number"
  					value={this.state.projectGoal}
  					onChange={this.update("titlePic")}
  					className="project-input project-goal"
            placeholder = "Project Goal"/>


          <input type="text"
            value={this.state.description}
            onChange={this.update("titlePic")}
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
