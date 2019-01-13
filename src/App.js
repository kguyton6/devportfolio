import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/projects/Projects'
import Gallery from './components/Gallery'
import Helo from './components/projects/Helo'
import Privy from './components/projects/Privy'
import Roadmap from './components/projects/Roadmap'


class App extends Component {
  render() {
    return (
      <Router>
       <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' render={() => (
           <Projects >
             <Switch>
               <Route path='/projects/helo' component={Helo} />
               <Route path='/projects/privy' component={Privy} />
               <Route path='/projects/roadmap' component={Roadmap} />
             </Switch>
             </Projects>

        )}/>
        <Route path='/gallery' component={Gallery} />
       </Switch>
       </Router>
    );
  }
}

export default App;
