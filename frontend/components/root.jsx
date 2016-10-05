import React from 'react';
import { Provider } from 'react-redux';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';

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
          <IndexRoute component={GreetingContainer} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
