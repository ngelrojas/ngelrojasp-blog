import React from 'react';
import API from '../../config/config.jsx';
import { ListArticles } from '../../components/list-articles/list-articles.component.jsx';
import './sub-topics.styles.scss';


class SubTopics extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,
            data_post: []
        }
    }

    getSubCategories =()=>{
        let subtopic = this.props.match.params.subtopic; 
        window.fetch(API+'api/categories/'+subtopic)
            .then(resp => resp.json()) 
            .then(response => {
                this.setState({
                    data_post: response.data,
                    isLoading: false
                }) 
            })
    }

    componentDidMount(){
        this.setState({isLoading: true});
        this.getSubCategories();        
    }

    render(){
        if(this.state.isLoading){
            return(
            <main>
                <div className="home-page">
                    <h1>LOADING...</h1>
                </div>
            </main>
                
            ) 
        }
        const {data_post} = this.state 

        return(
            <main>
                <div className="sub-topics">
                    <ListArticles data_post={data_post}/>
                </div>                
            </main>    
        ) 
    } 
    
};

export default SubTopics;
