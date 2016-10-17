# ClonedStarter

[Live site][Live-Site]

[Live-Site]: https://adeluca-kickstarter.herokuapp.com

ClonedStarter is a clone of KickStarter. The backend database is written in Rails. The frontend uses React/Redux.


# Features
- [ ] Hosting on Heroku
- [ ] Search for Projects on the site
- [ ] Secure User log in and sign up
- [ ] Project Creation including rewards
- [ ] Users can back projects
- [ ] User profile page can be edited
- [ ] Frontend securely communicates with backend

# Technical features

- [ ] Routes

```<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>/>
    <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>/>
    <Route path="/profile" component={UserProfileContainer} onEnter={_ensureLoggedIn}/>
    <Route path="/projects/new" component={ProjectFormContainer} onEnter={_ensureLoggedIn} />
    <Route path="/projects/:id" component={ProjectShowContainer} />
    <Route path="/search" component = {SearchContainer} />
    <Route path="/about" component = {About} />
    <Route path="/discover" component = {Discover} />
    <Route path="/discover/:id" component = {CategoryContainer} />
  </Route>
  <Route path="*" component={Error}/>
</Router>
```

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




# Game Pod
[Link] : here

## Minimum Viable Product

Game Pod is a online crowd-funding platform inspired by KickStarter, implemented using Ruby on Rails and React/Redux.
This site will be functional with the following features, bug-free navigation, and great css styling.

- [ ] Hosting on Heroku
- [ ] Browsing the project on the sites
- [ ] User sign up/ log in (for starting a project and backing projects)
- [ ] User backing a project
- [ ] Search projects
- [ ] Categories / Discover
- [ ] Production README
- [ ] Bonus: featured projects
- [ ] Bonus: payments
- [ ] Bonus: user info page

## Design Docs
* [Wireframes][wireframes]
* [React Component][component]
* [API endpoints][API]
* [DB schema][DB]
* [Redux Structure][Redux]
* [Sample State][State]

[wireframes]: wireframes
[component]: component-heirarchy.md
[API]: api-endpoints.md
[DB]: schema.md
[Redux]: redux-structure.md
[State]: sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Projects Model, API, and components (3 days)

**Objective:** Projects can be created, read, edited and destroyed through
the API.

- [ ] `Projects` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for Projects (`ProjectsController`)
- [ ] JBuilder views for projects
- [ ] `ProjectsIndex`
- [ ] `ProjectsForm`
- [ ] Style Projects components
- [ ] Seed Projects

### Phase 3: Rewards (2 days)

**Objective:** Rewards belong to Projects that can be created, read, edited and destroyed through the API.

- [ ] `Rewards` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for rewards (`RewardsController`)
- [ ] JBuilder views for projects
- [ ] Adding rewards requires a project
- [ ] Viewing rewards by project
- [ ] Style project components
- [ ] Review projects and rewards

### Phase 4: Backers (1 day)

**Objective:** Users can be back multiple rewards

- [ ] `backer` model and `backer` join table
- [ ] Adding backers to projects
- [ ] Style backer components
- [ ] Seed backers with seed data
- [ ] Review backer flow

### Phase 5: Searches (1 day)
- [ ] search function
- [ ] search views

### Phase 6: Testing, Debugging, Polishing (1 days)
- [ ] Testing and Debugging
- [ ] Complete Seed data
- [ ] Overall site styling

### Bonus Features (TBD)
- [ ] Server auto update project status daily
- [ ] Allow User to add picture and styling in project detail
- [ ] Add user profile page
- [ ] Add payment system
