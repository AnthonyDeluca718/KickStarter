import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: props.bio,
      photo_url: props.avatar_url,
      id: props.id,
      avatar_url: "",
      avatar: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("updated");

    var formData = new FormData();

    if(this.state.avatar) {
      formData.append("user[avatar]", this.state.avatar);
      formData.append("user[avatar_url]", this.state.photo_url);
    }

    formData.append("user[bio]", this.state.bio);
    this.props.processForm(formData);
  }

  updateAvatar(e) {

    const that = this;

    if (e) {
      var file = e.currentTarget.files[0];
    }

    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      that.setState({
        avatar_url: fileReader.result,
        avatar: file
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
          <img src={this.state.avatar_url} className="profile-preview" />

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
