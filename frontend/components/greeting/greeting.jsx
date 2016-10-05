import React from 'react';
import { Link, hashHistory } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">Sign up!</Link>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
    	<hgroup className="header-group">
    		<h2 className="header-name">Hi, {currentUser.name}!</h2>
    		<button className="header-button" onClick={logout}>Log Out</button>
    	</hgroup>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.personalGreeting(this.props.currentUser, this.props.logout);
    } else {
      return this.sessionLinks();
    }
  }
}

export default Greeting;
