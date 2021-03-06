import React from 'react';
import { Link, hashHistory } from 'react-router';

class Discover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    const that = this;
    $.ajax({
      method: 'GET',
      url: 'api/categories',
      success: function(response) {
        that.setState({categories: response});
      }
    });
  }

  render() {
    return(
      <div className="discover-content group">

        <ul className="discover-category-list group">
          {this.state.categories.map(
            function(category) {
              return(
                <li key={category.id} className="discover-category">
                  <Link className="category-link" to={`/discover/${category.id}`} >
                    <img className="category-picture" src={category.picture_url} />
                  </Link>
                </li>
              );
            }
          )}
        </ul>

      </div>
    );
  }
}

export default Discover;
