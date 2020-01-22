import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../article/article.component.jsx';
import BackComponent from './assets/back.component.jsx';
import ForwardComponent from './assets/forward.component.jsx';
import './list-articles.styles.scss';


export const ListArticles = props =>{
    
    return(
        <div className="wrap-list-articles">
            <div className="list-articles">
                
                {
                    props.data_post.map(posts =>
                        <Article key={posts.id} { ...posts } /> 
                    ) 
                }
                
            </div>
        </div>
            
    ) 
};
