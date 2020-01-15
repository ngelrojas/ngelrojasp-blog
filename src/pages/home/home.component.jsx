import React from 'react';
import ListArticles from '../../components/list-articles/list-articles.component.jsx';
import './home.styles.scss';


const Home = () => (
    <main>
        <div className="home-page">
            <h1>WELCOME TO MY PAGE ;)</h1>
            <ListArticles />
        </div>
        
    </main>
);

export default Home;
