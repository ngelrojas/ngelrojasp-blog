import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './assets/angel.png';
import GitHubComponent from './assets/github.component.jsx';
import LinkedInComponent from './assets/linkedin.component.jsx';
import TwitterComponent from './assets/twitter.component.jsx';
import FComponent from './assets/f.component.jsx';
import './about.styles.scss';

const AboutMe = () => {
return(
    <main>
        <div className="aboutme">
            <div className="aboutme__card">
                <div className="aboutme__me">
                    <figure>
                        <img src={Photo} alt="angel omar rojas pacheco" />
                    </figure>
                </div>
                <div className="aboutme__content">
                    <div className="name">
                        <h1>Angel O. Rojas P.</h1>
                        <h1 className="title">Software Architect</h1>
                    </div>
                    <div className="emails">
                        <h1 className="one">me@ngelrojasp.com</h1>
                        <h1 className="two">aomarrojasp@gmail.com</h1>
                    </div>
                    <div className="social-networks">
                         
                    </div>
                </div>
                <div className="aboutme__share">
                    <ul>
                        <li> <Link to='https://github.com/ngelrojasp'><GitHubComponent className="social-icons"/></Link></li>
                        <li> <Link to='/'><LinkedInComponent className="social-icons" /></Link></li>
                        <li> <Link to='/'><TwitterComponent className="social-icons" /></Link></li>
                        <li> <Link to='/'><FComponent className="social-icons"/></Link></li>
                    </ul>
                </div>
            </div>
            <div className="aboutme__words">
                <h1 className="title">Hi, how is it going on...! ;)</h1>
                <h1 className="content">
                    I'm Software Architect, passionate for the new 
                    programming languages and new technologies, one 
                    of my big qualities is to be self-taught, and an eternal learner. 
                </h1>
            </div>
            <div className="aboutme__btn"> 
                <Link to="/public/angel-rojas.pdf" target="_blank" className="btn-download" download>my resume</Link>
            </div>
        </div>
    </main>
)};

export default AboutMe;
