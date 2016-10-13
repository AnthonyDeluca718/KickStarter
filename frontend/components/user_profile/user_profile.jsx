import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: props.bio,
      photo_url: props.avatar_url,
      id: props.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert("I am working on what to put after you update. But you updated!")
    e.preventDefault();
    const user = {photo_url: this.state.photo_url, bio: this.state.bio, id: this.state.id};
    this.props.processForm(user);
  }

  render() {
    debugger
    return (
			<div className="profile-edit-container">
				<form onSubmit={this.handleSubmit} className="profile-edit-box">

          PhotoURL:
					<input
            id="photo-url"
            type="text"
						value={this.state.photo_url}
						onChange={this.update("photo_url")}
						className="photo-url-input"
            />

          Bio:
          <textarea
						value={this.state.bio}
						onChange={this.update("bio")}
						className="bio-input"
            />

          <input className="profile-submit" type="submit" value="Edit Profile" />
				</form>

			</div>
		);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


}

export default UserProfile;
