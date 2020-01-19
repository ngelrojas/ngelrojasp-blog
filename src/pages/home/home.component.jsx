import React from 'react';
import API from '../../config/config.jsx';
import { ListArticles } from '../../components/list-articles/list-articles.component.jsx';
import './home.styles.scss';


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,
            data_post: []
        }
    }

    componentDidMount(){
        this.setState({isLoading: true});
        window.fetch(API+`api/articles`)
            .then(res=>res.json())
            .then(response => {
                this.setState({
                    data_post: response.data,
                    isLoading: false
                }) 
            })        
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
                <div className="home-page">
                <h1>WELCOME TO MY PAGE ;) </h1>
                <ListArticles data_post={data_post}/>
                </div>
                
            </main>    
        ) 
    } 
    
};

export default Home;
