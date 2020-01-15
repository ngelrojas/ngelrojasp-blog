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
                url_read_more: 'link'
                }, 
                {
                id: 2, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'link'
                }, 
                {
                id: 3, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'link'
                }, 
                {
                id: 4, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'link'
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

            <div className="pagination">
                <ul className="wrapper-pagination">
                    <li className="pagination__item-next">
                        <Link to="/next"><BackComponent className="pagination-arrow"/></Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="/1">1</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="/2">2</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="/3">3</Link>
                    </li>
                    <li className="pagination__item-back">
                        <Link to="/back"><ForwardComponent className="pagination-arrow"/></Link>
                    </li>
                </ul>
            </div>

        </div>
            
        ) 
    }
};

export default ListArticles;
