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

import ProjectForm from './project/project_form'

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
          <Route path="/projects/new" component={ProjectForm} onEnter={_ensureLoggedIn} />
        </Route>
        <Route path="*" component={Error}/>
      </Router>
    </Provider>
  );
};

export default Root;
