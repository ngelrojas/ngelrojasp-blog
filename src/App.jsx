import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import NavMenu from './components/nav/nav.component.jsx';
import Home from './pages/home/home.component.jsx';
import AboutMe from './pages/about/about.component.jsx';
import DescripComponent from './pages/description/description.component.jsx';


export const App = () => (
   <div className="main__container">
       <Router>
           <Header />

           <NavMenu />

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about-me" component={AboutMe}></Route>
                <Route path="/topic/:slug" component={DescripComponent}></Route>
            </Switch>

       </Router>
       
   </div>
)
