import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import Modal from 'react-modal';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true
    };
  }

  componentDidMount() {
    const that = this;
    $.ajax({
      method: 'GET',
      url: `api/search/${that.props.id}`,
      success: function(response) {
        that.setState({
          projects: response,
          loading: false
        });
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

    const style = {
      content : {
        margin: '150px auto 0 auto',
        width: '350px',
        height: '115px',
        border: '1px solid red'
      }, overlay: {

      }
    };

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

        <Modal
          isOpen={this.props.loading}
          onRequestClose={this.errorModalClose}
          style={style}
        >
          Yolo
        </Modal>
      </div>
    );
  }
}

export default Category;
