import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: props.bio,
      photo_url: props.avatar_url,
      id: props.id,
      newAvatarBody: null,
      newAvatarUrl: "",
      newAvatar: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  handleSubmit(e) {
    alert("I am working on what to put after you update. But you updated!")
    e.preventDefault();
    const user = {photo_url: this.state.photo_url, bio: this.state.bio, id: this.state.id};
    this.props.processForm(user);
  }

  updateAvatar(e) {

    const that = this;

    if (e) {
      var file = e.currentTarget.files[0];
    }

    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      that.setState({
        newAvatarUrl: fileReader.result,
        newAvatar: file
      });
      console.log(that.state);
    }.bind(this)

    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  render() {
    return (
			<div className="profile-edit-container">
				<form onSubmit={this.handleSubmit} className="profile-edit-box">

          NewAvatar:
					<input
            type="file"
						onChange={this.updateAvatar}
						className="new-avatar-input"
            />

          Bio:
          <textarea
						value={this.state.bio}
						onChange={this.update("bio")}
						className="bio-input"
            />

          Preview:
          <img src={this.state.newAvatarUrl} className="profile-preview" />

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
