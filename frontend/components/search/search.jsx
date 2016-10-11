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
    let results = search.map((project)=>{return(
                    <p key={project.id}>
                      <Link to={`/projects/${project.id}`} className="search-element">{project.title}</Link>
                    </p>
                  );});
    return(
      <div className="search-bar">

          <input className="search-bar-input"
            type="text"
            value={this.state.data}
            onChange={this.getSearch(this.state.data)}
            placeholder="Search"
            ></input>

          <div className="results">
            {results}
          </div>
      </div>
    );
  }
}

export default Search;
