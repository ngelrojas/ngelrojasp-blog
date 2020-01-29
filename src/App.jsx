import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import NavMenu from './components/nav/nav.component.jsx'
import Home from './pages/home/home.component.jsx'
import AboutMe from './pages/about/about.component.jsx'
import TopicsComponent from './pages/topics/topics.component.jsx'
import DescripComponent from './pages/description/description.component.jsx'
import SubTopics from './pages/subtopics/sub-topics.component.jsx'
import NewsComponent from './pages/news/news.component.jsx'
import NotFound from './pages/not-found/notfound.component.jsx'

export const App = () => (
  <div className='main__container'>
    <Router>
      <Header />
      <NavMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about-me' component={AboutMe} />
        <Route exact path='/post/:slug' component={DescripComponent} />
        <Route path='/topics' component={TopicsComponent} />
        <Route path='/topic/:subtopic' component={SubTopics} />
        <Route path='/news' component={NewsComponent} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  </div>
)
