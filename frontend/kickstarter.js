//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
import Modal from 'react-modal';
require('./miniJQuery/miniJQuery.js');

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser, profile: window.profile, errors: [], photo_url: window.currentUser.photo_url, spent: window.currentUser.spent }};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
});
