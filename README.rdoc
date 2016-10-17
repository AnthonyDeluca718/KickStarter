# Game Pod

[Live site][Game Pod] or [Game Pod-heroku]

[Game Pod]: http://gamepod.ca
[Game Pod-heroku]: http://gamepod.herokuapp.com

Game Pod is a online crowd-funding platform inspired by KickStarter, implemented using Ruby on Rails and React/Redux.
This site will be functional with the following features, bug-free navigation, and great css styling.


# Features
- [ ] Hosting on Heroku
- [ ] Browsing the project on the sites
- [ ] User sign up/ log in (for starting a project and backing projects)
![login]
- [ ] User backing a project
![backing]
- [ ] Search projects
- [ ] Categories / Discover
![search]
- [ ] featured projects
![feature]
- [ ] user info page
![info]

[login]: ./docs/screenshots/login.png
[backing]:./docs/screenshots/backing.png
[search]:./docs/screenshots/search.png
[feature]:./docs/screenshots/feature.png
[info]:./docs/screenshots/info.png

# Technical features
- [ ] User-Login Error Feedback
```JaveScript
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const formType = ownProps.location.pathname.slice(1);
  const formType = ownProps.formType;
  const processForm = (formType === 'login') ? login : signup;

  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    formType
  };
};
```
- [ ] React-redux
 ![Redux Flow]
 [Redux Flow]:./docs/screenshots/redux.jpg
```Rails-Backend
class Api::SearchController < ApplicationController
  def index
    @search = Project.where('title Like ?', "%#{params[:data]}%")
    render "api/search/index"
  end

  def show
    @search = Project.where('category = ?', "#{params[:id]}")
    render "api/search/index"
  end
end
```
- [ ] React-Modal
```
this.state= {
  modal: false
  }
closeModal(){
  this.setState({modal: false});

}

openSignupModal(){
  this.setState({modal: true});
  this.setState({form: "signup"});
}

openLoginModal(){
  this.setState({modal: true});
  this.setState({form: "login"});
}


<Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)} style={this.state.style}>
   <SessionFormContainer formType={this.state.form} />
</Modal>
```
- [ ] Single-page Routes
```JaveScript
const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" onUpdate={() => window.scrollTo(0, 0)} component={ App }>
      <IndexRoute component= { ProjectIndexContainer }/>
      <Route path="/projects/:projectId" onUpdate={() => window.scrollTo(0, 0)} component = { DetailContainer }/>
      <Route path="/start" onUpdate={() => window.scrollTo(0, 0)} component = { StartFormContainer }/>
      <Route path="/search" onUpdate={() => window.scrollTo(0, 0)} component = { SearchContainer }/>
      <Route path="/edit/:projectId" onUpdate={() => window.scrollTo(0, 0)} component = { EditFormContainer }/>
      <Route path="/user/:id" onUpdate={() => window.scrollTo(0, 0)} component = { ProfileContainer }/>
      <Route path="/category/:type" onUpdate={() => window.scrollTo(0, 0)} component = { CategoryContainer }/>
    </Route>
  </Router>
);
```
- [ ] Real-time Search Bar
```JS
<form method="get" action="/search" id="search">
  <input className='search-bar' name="q" type="text" size="40" placeholder="Search..." onChange={this.search.bind(this)}/>
</form>
```
- [ ] Error-Feedback from Backend
```JS
const DetailReducer = (state = {reward:[], error:[]}, action) => {
    switch(action.type){
      case ProjectConstants.RECEIVE_DETAIL:
        action.detail.error= [];
        return action.detail;
      case ProjectConstants.RECEIVE_OTHER_ERROR:
        const newstate = merge({},state);
        newstate.error = action.error;
        console.log(newstate);
        return newstate;
      default:
        return state;
    }
  };
  ```
