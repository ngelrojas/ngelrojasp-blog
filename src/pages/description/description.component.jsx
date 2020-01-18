import React from 'react';
import './description.styles.scss';
import PATH from '../../config/config.jsx'


class DescripComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            fields: {},
            msg: {},
            data_post: {},
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({isLoading: true})
        let slug = this.props.match.params.slug
        fetch(PATH+'api/articles/'+slug)
        .then(response => {
             return response.json(); 
        })
        .then(res => {
             let res_data = res.data;
             this.setState({
                 data_post: res_data[0],
                 isLoading: false
             })
        })
    }

    render(){
        if(this.state.isLoading){
            return(
                <main>
                    <div className="content-desc"><h1 className="loading">LOADING....</h1></div>
                </main>
            )
        }
        return(
        <main>
            <div className="content-desc">
                <div className="content-desc__head">
                    <figure className="head__img">
                        <img src={`${PATH+'api/storage/blog-images/articles/'+this.state.data_post.art_img_excerpt}`} alt={this.state.data_post.art_title_slug} />
                    </figure>
                    
                    <h1>{this.state.data_post.art_title}</h1>
                    <div className="head__author">
                        <div className="author">
                            <span>author: </span>{this.state.data_post.full_name}
                        </div>
                        <div className="data">
                            <span>Data: </span>{this.state.data_post.created_at}
                        </div>
                    </div>
                </div>
                <div className="content-desc__body">
                    <div  dangerouslySetInnerHTML={{ __html: this.state.data_post.art_description} } ></div> 
                </div>
            </div>
            
        </main>
            
        ) 
    }
}

export default DescripComponent;
