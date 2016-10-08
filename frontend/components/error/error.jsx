import React from 'react';
import {Link, hashHistory} from 'react-router';

class Error extends React.Component {
  render() {
    return(
      <div className="error">

        <div className="logo">
          <Link to="/" className="profile-cloned">CLONED</Link>
          <Link to="/" className="profile-starter">STARTER</Link>
        </div>

        <div className="content">
          <h1>404</h1>
          <h2 className="ohMy">OH MY GOODNESS</h2>
            <div className="message">
              We apologize but something's gone wrong&#45; an old link, a bad link, or some little glitch.
            </div>
            <Link to="/" className="error-page-link">Go to home page</Link>
          </div>
      </div>
    );
  }
}

export default Error;
