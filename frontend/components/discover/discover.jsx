import React from 'react';

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
    const catShow = this.state.categories.map( (category) => {
        return(
          <div key={category.id} className="discover-category">
            {category.name}
            <p></p>
            <img className="category-picture" src={category.picture_url} />
          </div>
        );
      }
    );

    return(
      <div className="discover-content">
        {catShow}
      </div>
    );
  }
}

export default Discover;
