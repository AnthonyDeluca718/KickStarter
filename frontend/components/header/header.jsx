import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {

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
    		<img className="profile-picture" src="./images/blank_profile.png" />
    		<button className="header-button" onClick={logout}>Log Out</button>
    	</hgroup>
    );
  }

  render() {
    let rightCorner;
    if (this.props.currentUser) {
      rightCorner = this.personalGreeting(this.props.currentUser, this.props.logout);
    } else {
      rightCorner = this.sessionLinks();
    }

    return(
      <header>
        <div className="left group">
          left
        </div>
        <div className="right">
          {rightCorner}
        </div>
        <div className="mid">
          right
        </div>

      </header>
    );
  }
}

export default Header;
