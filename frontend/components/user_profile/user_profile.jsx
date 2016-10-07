import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: props.bio,
      photo_url: props.photo_url,
      visible: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.id) {
      const user = {id: this.props.id, user: {photo_url: this.state.photo_url, bio: this.state.bio}}
      this.props.processForm(user);
    }
  }

  render() {
    console.log(this.props.id === undefined);
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
          <input type="bio"
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
