import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../article/article.component.jsx';
import BackComponent from './assets/back.component.jsx';
import ForwardComponent from './assets/forward.component.jsx';
import PATH from '../../config/config.jsx';
import './list-articles.styles.scss';


class ListArticles extends React.Component{
    
    constructor(){
        super();
        this.state = {
            fields: {},
            msg: {},
            isLoading: false,
            data_post: [],
            sections: [
                {
                id: 1, 
                title: 'python for data science',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'how-to-build-an-api-restful-using-drfdjango-rest-framework-part-1'
                }, 
                {
                id: 2, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'how-to-build-an-api-restful-using-drfdjango-rest-framework-part-1'
                }, 
                {
                id: 3, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'how-to-build-an-api-restful-using-drfdjango-rest-framework-part-1'
                }, 
                {
                id: 4, 
                title: 'python for data science part one, stay tunned',
                excerpt: ' Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. An the other form you can choose your destiny beyond the nature be. ',
                author: 'ngel rojas',
                data: '2020-1-10',
                url_read_more: 'how-to-build-an-api-restful-using-drfdjango-rest-framework-part-1'
                } 
            ]
        }
    }

    componentDidMount(){
        this.setState({isLoading: true})
        let data_art = fetch(PATH+'api/articles/', {mode: 'no-cors'});
        data_art.then(response=>{
            console.log(response); 
        }).then(response=>{
            console.log(response) 
        }).then(res=>{
            console.log(res); 
        })
    }

    render(){

        if(this.state.isLoading){
            return(
                <div className="wrap-list-articles">
                    <div className="list-articles"><h1 className="loading">LOADING...</h1></div>
                </div>
            ) 
        }

        return(
        <div className="wrap-list-articles">
            <div className="list-articles">
                
                {
                    this.state.data_post.map(({idart, ...otherSectionProps}) =>(
                        <Article key={idart} { ...otherSectionProps } /> 
                    )) 
                }
                
            </div>
 

        </div>
            
        ) 
    }
};

export default ListArticles;
