import React from 'react';
import logo from './logo.svg';
import "./bootstrap/bootstrap.min.css"
import './App.css';
import Booklist from "./components/booklist";
import Developer from "./components/whothedev";
import Credits from "./components/credits";
function App() {
  return (
      <div className="App-header">
    <div class="jumbotron jumbotron-fluid">
      <div className="centerize">
  <h1 class="display-4" style={{letterSpacing:`20px`}}>Welcome !<h1>To Simple <h1>MERN Stack</h1></h1></h1>
  <h4 class="lead">This is the client side a simple MERN stack site for get a book data.</h4>
  <p class="lead">
    <a class="btn btn-dark btn-lg" href="https://github.com/chrysnaardy123/" role="button">Visit Github</a>
  </p>
  </div>
</div>
<div>
  <Booklist/>
</div>
<div>
    <Developer/>
</div>
<div>
    <Credits/>
</div>
    </div>

  );
}

export default App;
