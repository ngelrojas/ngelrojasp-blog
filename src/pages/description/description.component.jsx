import React from 'react';


class DescripComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            fields: {},
            msg: {}
        }
    }

    render(){
        return(
        <main>
            <div className="content_description">
                <h1>{this.props.match.params.slug}</h1>
            </div>
        </main>
            
        ) 
    }
}

export default DescripComponent;
