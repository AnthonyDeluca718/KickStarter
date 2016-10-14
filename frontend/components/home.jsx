import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-container">
        <img src='images/super_charged.jpg' className="home-main-picture"/>
      </div>
    )
  }
}

export default Home;
