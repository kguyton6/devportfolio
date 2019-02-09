import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/projects/Projects'
import Skills from './components/Skills'
import Helo from './components/projects/Helo'
import Privy from './components/projects/Privy'
import Roadmap from './components/projects/Roadmap'


 

const routes = (
       <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects/helo' component={Helo} />
        <Route path='/projects/privy' component={Privy} />
        <Route path='/projects/roadmap' component={Roadmap} />
        <Route path='/projects' component={Projects}/>
          
        <Route path='/skills' component={Skills} />
       </Switch>

    
  )
export default routes