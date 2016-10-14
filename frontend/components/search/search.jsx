import React from 'react';
import {Link, hashHistory} from 'react-router';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: ""};
    this.viewProject = this.viewProject.bind(this);
  }

  componentDidMount(){
  }

  viewProject(id){
    hashHistory.push(`/projects/${id}`);
  }

  getSearch() {
    const that=this;
		return e => {
      that.setState({data: e.currentTarget.value});
      that.props.getSearch(e.currentTarget.value);
		};
	}

  render (){
    const {search} = this.props;

    let results;
    if (this.state.data.length > 0) {
      results = search.map((project)=>{return(
        <li key={project.id} className="search-element">
          <Link to={`/projects/${project.id}`}>
            <img className="search-project-picture" src={project.head_photo_url} />
          </Link>
        </li>
      );});
    } else {
      results = <li className="search-description">Search is by creator name and project title.</li>
    }

    let renderRes;

    return(
      <div>
        <div className="search-bar-wrapper">
          <input className="search-bar-input"
            type="text"
            value={this.state.data}
            onChange={this.getSearch(this.state.data)}
            placeholder="Search"
            ></input>
        </div>

        <div className="search-contents">
          <ul className="search-projects-list group">
            {results}
          </ul>
        </div>
      </div>
    );

  }
}

export default Search;
