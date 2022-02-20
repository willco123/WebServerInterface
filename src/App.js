import logo from './logo.svg';
import './App.css';
import {Route, Redirect, Routes, Router, BrowserRouter, Switch} from 'react-router-dom';
import Homepage from './components/homepage';
import Feed from './components/feed';

function App() {
  return (
    <main className = "App-main">
      <Routes>
        <Route path="/" element = {<Homepage/>} />
        <Route path="/feed" element = {<Feed/>} />
      </Routes>
    </main>
  );
}

export default App;

