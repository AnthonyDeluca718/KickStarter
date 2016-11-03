import React from 'react';

class About extends React.Component {

  render() {
    return(
      <div className="about-page">
        <h1 className="about-title">About ClonedStarter</h1>

        <div className="about-paragraph">
          Hi, I'm Anthony Deluca. ClonedStarter was my fullstack project at app academy. I chose to clone kickstarter because I think its a great site.
        </div>

        <div className="about-icons">
          <a href="http://adeluca.io"><i className="about-i fa fa-home" aria-hidden="true"></i></a>
          <a href="https://github.com/AnthonyDeluca718"><i className="about-i devicon-github-plain colored"></i></a>
          <a href="https://www.linkedin.com/in/a-deluca"><i className="about-i fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="mailto:mail@adeluca.io" ><i className="about-i fa fa-envelope" aria-hidden="true"></i></a>
        </div>

      </div>
    )
  }

}

export default About
