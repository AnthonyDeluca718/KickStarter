import React from 'react'

class RewardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      cost: 0,
      limit: 10
    }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="login-form-box">

        <select className="project-form-select" name="id" onChange={this.update("category_id")} placeholder="Category">
          {this.state.categories.map(
            function(cat) {
              return(
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              );
            }
          )}
        </select>

        <input type="text"
          value={this.state.title}
          onChange={this.update("title")}
          className="project-input project-title"
          placeholder="Title" />

        <input type="text"
          value={this.state.headPhotoUrl}
          onChange={this.update("headPhotoUrl")}
          className="project-input project-head-photo-url"
          placeholder = "Head Photo Url"/>

        <label htmlFor="pro-goal" className="project-label">Goal:</label>

        <input type="number"
          value={this.state.goal}
          onChange={this.update("goal")}
          className="project-input project-goal"
          placeholder = "Project Goal"/>

        <textarea
          value={this.state.description}
          onChange={this.update("description")}
          className="project-input project-description"
          placeholder="Description"
          />

        <label htmlFor="pro-date" className="project-label">End Date:</label>

        <input type="date"
          value={this.state.endDate}
          onChange={this.update("endDate")}
          className="project-input project-date"
        />

      <input className="project-input project-button" type="submit" value="Create Project" />

      </form>
    )
  }
}

  render



}
