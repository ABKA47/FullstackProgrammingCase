import React from 'react'
import { Route } from 'react-router-dom'
import User from './containers/user'

function App() {
  return (
    <div className="App">
      <Route exact path="/users" component={User} />
    </div>
  );
}

export default App;
