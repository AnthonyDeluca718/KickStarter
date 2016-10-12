import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';
// import RewardForm from '../rewards/reward_form';

class ProjectForm extends React.Component {
  const
	constructor(props) {
		super(props);
    let today = new Date();
		this.state = {
			title: "",
			headPhotoUrl: "",
      goal: 0,
      description: "",
      endDate: today.toISOString().split('T')[0],
      modalOpen: false,
      rewardModal: false,
      categories: [],
      category_id: null,
      rewards: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.rewardModalClose = this.rewardModalClose.bind(this);
    this.addReward = this.addReward.bind(this);
    this.upDateReward = this.upDateReward.bind(this);
	}

  componentWillReceiveProps(nextProps) {
   	if (nextProps.errors.length > 0) {
    	this.setState({modalOpen: true});
  	}
  }

  componentDidMount() {
    const that = this;
    $.ajax({
      method: 'GET',
      url: 'api/categories',
      success: function(response) {
        that.setState({categories: response, category_id: response[0].id});
      }
    });
  }

	redirectIfLoggedIn(){
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  upDateReward(field, idx) {
    return e => {
      this.state.rewards[idx][field] = e.currentTarget.value;
      this.setState({rewards: this.state.rewards});
		};
  }

	handleSubmit(e) {
		e.preventDefault();

    if (this.state.rewards.some(function(reward){ return(reward.title==="" || reward.body==="" || reward.cost < 0) })) {
      this.setState({rewardModal: true});
    } else {
      const project = {
        title: this.state.title,
        user_id: this.state.user_id,
        description: this.state.description,
        end_date: this.state.endDate,
        head_photo_url: this.state.headPhotoUrl,
        goal: this.state.goal,
        category_id: this.state.category_id,
        rewards: this.state.rewards
      };
      this.props.processForm(project);
    }
	}

  addReward () {
    this.state.rewards.push({title: "", body: "", cost: 1, });
    this.setState({rewards: this.state.rewards});
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  onModalClose() {
    this.setState({modalOpen: false});
  }

  rewardModalClose() {
    this.setState({rewardModal: false})
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


  	return (
  		<div className="project-form-container">
  			<form onSubmit={this.handleSubmit} className="login-form-box">

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

        <div className="project-create-rewards-container">
          <h1 className="project-create-rewards-header">Rewards!</h1>

          <div className="project-create-rewards-list">

            {this.state.rewards.map( (reward, idx)=>{
              return(
                <div key="idx" className="project-create-rewards-el">
                  <input type="text"
                    className="project-create-rewards-input"
                    value={reward.title}
                    onChange={this.upDateReward('title', idx)}
                    placeholder="Title"
                  />

                <textarea
                    className="project-create-rewards-input project-create-rewards-textarea"
                    value={reward.body}
                    onChange={this.upDateReward('body', idx)}
                    placeholder="Description"
                  />

                <text className=".project-create-rewards-label">
                  Cost
                </text>

                <input type="number"
                    className="project-create-rewards-input"
                    value={reward.cost}
                    onChange={this.upDateReward('cost', idx)}
                    placeholder="Cost"
                  />
                </div>
              );
            })}
          </div>

          <button className="project-add-reward" onClick={ this.addReward }>Add Reward</button>
        </div>


        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={style}
        >
          {this.renderErrors()}
        </Modal>

        <Modal
          isOpen={this.state.rewardModal}
          onRequestClose={this.rewardModalClose}
          style={style}
        >
          "Reward Titles and bodies cannot be empty. Cost must be non-negative"
        </Modal>

  		</div>
    );
  }

}

export default ProjectForm;
