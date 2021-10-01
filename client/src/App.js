import React from 'react'
import { Route, Switch } from 'react-router-dom'
import User from './containers/user/user'
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={User} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
