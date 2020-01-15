import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../article/article.component.jsx';
import BackComponent from './assets/back.component.jsx';
import ForwardComponent from './assets/forward.component.jsx';
import './list-articles.styles.scss';


class ListArticles extends React.Component{
    
    constructor(){
        super();
        this.state = {
            fields: {},
            msg: {},
            sections: [
                {
                id: 1, 
                title: 'python for data science',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'python-for-data-science'
                }, 
                {
                id: 2, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'python-data-sicence-part-one-stay-tunned'
                }, 
                {
                id: 3, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'python-data'
                }, 
                {
                id: 4, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'data-for-scientis-here-like-you'
                } 
            ]
        }
    }

    render(){
        return(
        <div className="wrap-list-articles">
            <div className="list-articles">
                
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <Article key={id} { ...otherSectionProps } /> 
                    )) 
                }
                
            </div>
 

        </div>
            
        ) 
    }
};

export default ListArticles;
