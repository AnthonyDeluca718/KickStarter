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
      <nav className="login-signup rightCorner">
        <Link to="/login" activeClassName="current" className="Link">Login<nav className="hover-bar"></nav></Link>
        <Link to="/signup" activeClassName="current" className="Link">Sign up!<nav className="hover-bar"></nav></Link>
        <button className="Link guest" >Guest<nav className="hover-bar"></nav></button>
        <button className="search"><img className="mag-glass" src="images/mag_glass.png"/></button>
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
      <ul className="rightCorner">
    		<li><img className="profile-picture" src={source}/></li>
        <li><button className="logout" onClick={logout}>Log Out</button></li>
        <li><button className="search"><img className="mag-glass" src="images/mag_glass.png"/></button></li>
      </ul>
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
          <li><button className="Link">Discover<nav className="hover-bar"></nav></button></li>
          <li><button className="Link">Start a Project<nav className="hover-bar"></nav></button></li>
          <li><button className="Link">About Us<nav className="hover-bar"></nav></button></li>
        </ul>
        <div className="right">
          {rightCorner}
        </div>
        <div className="mid">
          <Link to="/" className="profile-cloned">CLONED</Link>
          <Link to="/" className="profile-starter">STARTER</Link>
        </div>
      </header>
    );
  }
}

export default Header;
