import logo from './logo.svg';
import './App.css';
import Login from './screens/login';
import Todo from './screens/todo';
import Settings from './screens/settings';



import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/todo" Component={Todo} />
          <Route path="/settings" Component={Settings} />

        </Routes>
      </div>
    </BrowserRouter >
  );
}
