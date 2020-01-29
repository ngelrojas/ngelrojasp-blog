import React from 'react';
import { Helmet } from 'react-helmet';
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

    getArticles=()=> {
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

    componentDidMount(){
       this.getArticles(); 
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name='description' content='I am software arquitech, pasionate for new language programming and other tech, and aternal learner. '/> 
                </Helmet>
                <div className="home-page">
                <h1>WELCOME TO MY PAGE ;) </h1>
                <ListArticles data_post={data_post}/>
                </div>                
            </main>    
        ) 
    } 
    
};

export default Home;
