import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserProfile extends React.Component {

  constructor(props) {
    debugger
    super(props);
    this.state = {
      bio: props.bio,
      photo_url: props.photo_url
    }
  }

  render() {
    return(
      <div>
        {this.state.bio }
        <p></p>
        {this.state.photo_url}
      </div>
    )
  }
}

// class UserProfile extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			bio: this.props.bio,
//       photo_url: this.props.photo_url
// 		};
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
//
// 	componentDidUpdate() {
// 	}
//
//    componentWillReceiveProps(nextProps) {
//   }
//
// 	update(field) {
// 		return e => this.setState({
// 			[field]: e.currentTarget.value
// 		});
// 	}
//
// 	handleSubmit(e) {
// 		e.preventDefault();
// 		const user = {id: this.props.id, user: {photo_url: this.state.photo_url, bio: this.state.bio}}
// 		this.props.processForm(user);
// 	}
//
//   render() {
//
// 		return (
// 			<div className="profile-edit-container">
// 				<form onSubmit={this.handleSubmit} className="profile-edit-box">
//
//           PhotoURL:
// 					<input
//             id="photo-url"
//             type="text"
// 						value={this.state.photo_url}
// 						onChange={this.update("photo_url")}
// 						className="photo-url-input"
//             />
//
//           Bio:
//           <input type="bio"
// 						value={this.state.bio}
// 						onChange={this.update("bio")}
// 						className="bio-input"
//             />
//
//           <input className="profile-submit" type="submit" value="Edit Profile" />
// 				</form>
//
// 			</div>
// 		);
// 	}
//
// }

export default UserProfile;
