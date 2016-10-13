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
        <Link to="/signup" activeClassName="current" className="Link">Sign up<nav className="hover-bar"></nav></Link>
        <button className="Link guest" onClick = {this.props.guestLogin}>Guest<nav className="hover-bar"></nav></button>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {

    let source;
    if (this.props.photo_url) {
      source = this.props.photo_url;
    } else {
      source = 'images/default_profile.png';
    }
    return (
      <ul className="rightCorner">
    		<li><Link to="/profile"><img className="profile-picture" src={source}/></Link></li>
        <li><Link to = "/" onClick={logout}><button className="logout Link">Log Out<nav className="hover-bar"></nav></button></Link></li>
        <li><Link to = "/projects/new" ><button className="newProject Link">Start a Project<nav className="hover-bar"></nav></button></Link></li>
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
          <li><Link to="/discover" className="Link">Discover<nav className="hover-bar"></nav></Link></li>
          <li><Link to="/about" className="Link">About Us<nav className="hover-bar"></nav></Link></li>
          <li><Link to="/search" className="Link search-icon" ><img className="mag-glass" src="images/mag_glass.png"/></Link></li>
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
