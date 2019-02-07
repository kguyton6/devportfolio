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
import {withRouter} from 'react-router'

class App extends Component {
  state = {
    swap: false,
    title: 'Dev Portfolio'
  }
   
  swapLinks = () => {
    this.setState(prevState => {
      return { swap: !prevState.swap}})
   }
  
   swapTitle = () => {
     if(this.state.swap){
       var title = 'Projects'
      } else {
        title = 'Dev Portfolio'
      }
      this.setState({title: title})
   }
  render() {
    return (
      <div>
        <Header swapLinks={this.swapLinks} swap={this.state.swap} title={this.state.title}/>
        {routes}
        <Footer/>
       </div>
    );
  }
}

export default withRouter(App);
