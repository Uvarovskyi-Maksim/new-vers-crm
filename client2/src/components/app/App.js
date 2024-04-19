// App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../pages/mainPage/mainPage';
import DirectorPage from '../pages/rolePages/directorPage/directorPage';
import AdminPage from '../pages/rolePages/adminPage/adminPage'
import ManagerPage from '../pages/rolePages/managerPage/managerPage'
import RegistrationPage from '../pages/regisrtation/Login';

import { useState } from 'react';

function Main(){
  return(
    <div>
      <h1>Main</h1>
      <NavLink to={'/director'}>Go to director</NavLink>
    </div>
  )
}


function Director(){
  return(
    <div>
      <h1>Main</h1>
      <NavLink to={'/'}>Go to main</NavLink>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      
      <div>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<RegistrationPage />}></Route>
            <Route path="/director" element={<DirectorPage />} />
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/admin" element={<AdminPage />} />
            {/* <Route path="/" element={<Main />} />
            <Route path="/" element={<DirectorPage />} /> */}

        </Routes>
        </DndProvider>
      </div>
  
      <img src="../" alt="" />
    </Router>
  );
};

export default App;
