import React from 'react';
import { hashHistory } from 'react-router';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const that = this;
    $.ajax({
      method: 'GET',
      url: `api/search/${that.props.id}`,
      success: function(response) {
        that.setState({projects: response});
      },
      error: function() {
        hashHistory.push('/error');
      }
    });
  }

  render() {
    let projShow = this.state.projects.map( (project) => {
        return(
          <div key={project.id} className="category-project">
            {project.title}
            <p></p>
            <img className="category-project-picture" src={project.head_photo_url} />
          </div>
        );
      }
    );

    return(
      <div className="category-content">
        {projShow}
      </div>
    );
  }
}

export default Category;
