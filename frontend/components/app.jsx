import React from 'react';
import { Link } from 'react-router';
// import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <h1>Yolo App</h1>
    </header>
    {children}
  </div>
  
);

export default App;
