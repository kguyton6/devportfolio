import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/projects/Projects'
import Helo from './components/projects/Helo'
import Privy from './components/projects/Privy'
import Footer from './components/Footer'
import Header from './components/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
        <Footer/>
       </div>
    );
  }
}

export default App;
