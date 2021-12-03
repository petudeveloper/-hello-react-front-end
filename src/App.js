import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Routes>
    <Route exact path="/" element={<p>Home Page!!</p>} />
    <Route exact path="/greeting" element={<Greeting />} />
  </Routes>
);

export default App;
