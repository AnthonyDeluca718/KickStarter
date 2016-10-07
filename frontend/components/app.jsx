import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import UserProfileContainer from './user_profile/user_profile_container';

const App = ({children}) => (
  <div>
    <HeaderContainer />
    <UserProfileContainer />
    <section className="content">
      {children}
    </section>
  </div>
);

export default App;
