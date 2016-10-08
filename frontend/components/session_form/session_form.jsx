import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: "",
      modalOpen: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  componentWillReceiveProps(nextProps) {
    console.log(this.props.formType)
    console.log(nextProps.formType)
   	 if (this.props.formType != nextProps.formType) {
   		this.setState({modalOpen: false});
   	 } else if (nextProps.errors.length > 0) {
    	this.setState({modalOpen: true});
  	}
  }

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
    if(this.props.errors.length > 0) {
      this.setState({modalOpen: true})
    }
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
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

    let req;
    let type;
    if (this.props.formType === "login") {
      req = "Log me in!";
      type = "Log in";
    } else {
      req = "Sign me up!";
      type = "Sign up";
    }

    const style = {
      content : {
        margin: '250px auto 0 auto',
        width: '350px',
        height: '115px',
        border: '1px solid red'
      }, overlay: {

      }
    };

		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          <text className="form-type">{type}</text>

					<input type="text"
						value={this.state.name}
						onChange={this.update("name")}
						className="login-input"
            placeholder="name" />

					<input type="password"
						value={this.state.password}
						onChange={this.update("password")}
						className="login-input"
            placeholder = "password"/>

          <input className="login-input login-button" type="submit" value={req} />

            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={style}
            >
              {this.renderErrors()}
            </Modal>
				</form>

			</div>
		);
	}

}

export default SessionForm;
