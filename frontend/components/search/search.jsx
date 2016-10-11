import React from 'react';
import {hashHistory} from 'react-router';

class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }
  componentDidMount(){
  }

  showDetail(id){
    hashHistory.push(`/projects/${id}`);
  }

  render (){
    const {search} = this.props;
    let result;
    if (search.length < 1){
      result = <h1>No match found</h1>;
     } else {
      result = <h1>Search Result</h1>;
     }
    const panel = search.
    map((project)=>{return(
                    <div key={project.id} className="panel" onClick={this.showDetail.bind(this, project.id)}>
                        <p>{project.title}</p>
                    </div>

                  );});
    return(
      <div className="content">
         {result}
          <div className="category">
            {panel}
         </div>
        </div>
    );
  }
}

export default SearchIndex;
