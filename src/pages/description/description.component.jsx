import React from 'react';


class DescripComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            fields: {},
            msg: {},
            data_post: {},
        }
    }

    componentDidMount(){
        let slug = this.props.match.params.slug
        fetch(`https://apiblog.ngelrojasp.com/api/articles/${slug}`)
        .then(response => {
             return response.json(); 
        })
        .then(res => {
             let res_data = res.data;
             // console.log(res_data[0].art_title);
             this.setState({data_post: res_data[0]})
        })
    }

    render(){
        return(
        <main>
            <div className="content_description">
                <h1>{this.state.data_post.art_title}</h1>
            </div>
        </main>
            
        ) 
    }
}

export default DescripComponent;
