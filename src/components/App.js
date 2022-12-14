import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>Homestead List</h1>
      </header>
      <Navbar />
      <Outlet context />
      <footer>
        <p>
          Developed by
          <span id="author">Drewford</span>
        </p>
      </footer>
    </div>
  )
}

export default App;