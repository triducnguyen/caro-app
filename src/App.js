import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/board">Game Board</Link>
            </li>
            <li>
              <Link to="/status">Game Status</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/board">
            <GameBoard />
          </Route>
          <Route path="/status">
            <GameStatus player="black" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
