import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../card/card.component.jsx';
import './list-cards.styles.scss';


export const ListCards = props =>{
    
    return(
        <div className="list-topic">
            
                {
                    props.data_cat.map(cate =>
                        <Article key={cate.id} { ...cates } /> 
                    ) 
                }
                
        </div>
            
    ) 
};
