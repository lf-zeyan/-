import React, { Component } from 'react';
import {Switch, Route,NavLink } from 'react-router-dom'
import Home from './home.js'
import History from './history.js'
import Xiangqing from './xiangqing.js'



class App extends Component {//父组件
  render() {
    return (
      <div>
       <Switch>
           <Route path='/home' component={Home}></Route>
           <Route path='/history' component={History}></Route>
           <Route path='/xiangqing' component={Xiangqing}></Route>
       </Switch>
      </div>
    );
  }
}

export default App;
