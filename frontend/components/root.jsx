import React from 'react';
import { Provider } from 'react-redux';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import UserProfileContainer from './user_profile/user_profile_container'
import Error from './error/error';
import ProjectFormContainer from './project/project_form_container'
import ProjectShowContainer from './project/project_show_container'
import SearchContainer from './search/search_container'
import About from './about';
import Discover from './discover/discover';
import CategoryContainer from './discover/category_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
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
    </Provider>
  );
};

export default Root;
