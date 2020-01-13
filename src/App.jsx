import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import NavMenu from './components/nav/nav.component.jsx';
import Home from './pages/home/home.component.jsx';
import AboutMe from './pages/about/about.component.jsx';


export const App = () => (
   <div className="main__container">
       <Router>
           <Header />

           <NavMenu />

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/angel-rojas" component={AboutMe}></Route>
            </Switch>

       </Router>
       
   </div>
)
