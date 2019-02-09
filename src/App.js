import React, { Component } from 'react';
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
