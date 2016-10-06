import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';

const App = ({children}) => (
  <div>
    <HeaderContainer />
    <section className="content">
      {children}
    </section>
  </div>
);

export default App;
