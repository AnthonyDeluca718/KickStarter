import React from 'react';

class About extends React.Component {

  render() {
    return(
      <div className="about-page">
        <h1 className="about-title">About ClonedStarter</h1>

        <div className="about-paragraph">
          Hi, I'm Anthony Deluca. ClonedStarter was my fullstack project at app academy. I chose to clone kickstarter because I think its a great site. I am working to improve the site so that it visually resembles Kickstarter and implements the core functionality. However Kickstarter has quite a number of features and not all of them will be implemented.
        </div>

        <div className="about-paragraph">
          An important goal of the project is to make a site that looks like the real Kickstarter. However its important that I have no intention of mis-representing this site as the real Kickstarter. To this end I changed the logo and did not use any material from kickstarter.
        </div>

      </div>
    )
  }

}

export default About
