import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.id != this.props.id) {
      const that = this;
      $.ajax({
        method: 'GET',
        url: `api/search/${nextProps.id}`,
        success: function(response) {
          that.setState({projects: response});
        },
        error: function() {
          hashHistory.push('/error');
        }
      });
    }
  }

  render() {
    let projShow = this.state.projects.map( (project) => {
        return(
          <li key={project.id} className="category-project">
            <Link to={`/projects/${project.id}`} className="category-project-link" >
              <img className="category-project-picture" src={project.head_photo_url} />
            </Link>
          </li>
        );
      }
    );

    return(
      <div className="category-content group">
        <ul className="category-project-list group">
          {projShow}
        </ul>
      </div>
    );
  }
}

export default Category;
