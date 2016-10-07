import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
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

		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{ this.renderErrors() }

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
				</form>
			</div>
		);
	}

}

export default SessionForm;
