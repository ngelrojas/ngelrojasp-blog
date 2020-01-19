import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ShareComponent from './assets/share.component.jsx';
import HeartComponent from './assets/heart.component.jsx';
import NextComponent from './assets/next.component.jsx';
import { FavBtn } from '../favbtn/favbtn.component.jsx';
import './article.styles.scss';


export const Article = ({id, art_title, art_title_slug, art_excerpt, created_at}) =>{
    const liked = 1 
    const handleClick = (e) => {
        e.preventDefault();
        console.log(id)
    }

    return(<div className="wrap-art">
        <div className="wrapper-art-item">
            <div className="art-item-head">
                <h6>
                    <Link to={`/${art_title_slug}`}>{art_title.toUpperCase()}</Link>
                </h6>
                <div className="art-item-author">
                    <p className="art author">
                        <span className="title-author">author</span>: <span className="content-author"> ngel rojas</span>
                    </p>
                    <p className="art data">
                        <span className="title-author">data</span>: <span className="content-author"> {created_at}</span>
                    </p>
                    
                </div>
            </div>
            <div className="art-item-excerpt">
                <p>
                    <Link to={`/${art_title_slug}`}>
                        {art_excerpt}
                    </Link>
                </p>
            </div>
            <div className="art-item-links">
                <ul className="list-links">
                    <li className="links-item">
                        <Link to="#"><ShareComponent className="icon-link" /></Link>
                    </li>
                    <li className="links-item">
                        <Link to="#"><HeartComponent className="icon-link" /></Link>
                        
                        <FavBtn className="icon-link" liked={liked} onClick={handleClick} />
                    </li>
                    <li className="links-item">
                        <Link to={`/${art_title_slug}`}><NextComponent className="icon-link" /></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)};
