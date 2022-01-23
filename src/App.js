import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import ProfilePage from './pages/profile/profile.component';

import "./App.scss";

const App = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path='/:user' element={<ProfilePage />} />
    </Routes>
  </div>
);

export default App;
