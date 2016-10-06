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

    let source;
    if (currentUser.photo_url) {
      source = currentUser.photo_url;
    } else {
      source = 'images/default_profile.png';
    }
    return (
    	<hgroup className="header-group">
        <button className="header-button" onClick={logout}>Log Out</button>
    		<img className="profile-picture" src={source}/>
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
        <ul className="header-nav left group">
          <li><button>Discover<nav className="hover-bar"></nav></button></li>
          <li><button>Start a Project<nav className="hover-bar"></nav></button></li>
          <li><button>About Us<nav className="hover-bar"></nav></button></li>
        </ul>
        <div className="right">
          {rightCorner}
        </div>
        <div className="mid">
          <text className="profile-cloned">CLONED</text>
          <text className="profile-starter">STARTER</text>
        </div>

      </header>
    );
  }
}

export default Header;
