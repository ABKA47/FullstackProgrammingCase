import React from 'react'
import { Route } from 'react-router-dom'
import User from './containers/user/user'
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/users" component={User} />
      <Footer />
    </div>
  );
}

export default App;
