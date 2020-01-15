import React from 'react';
import { Link } from 'react-router-dom';
import ShareComponent from './assets/share.component.jsx';
import HeartComponent from './assets/heart.component.jsx';
import NextComponent from './assets/next.component.jsx';
import './article.styles.scss';


const Article = ({id, title, excerpt, author, data, url_read_more}) => (
    <div className="wrap-art">
        <div className="wrapper-art-item">
            <div className="art-item-head">
                <h6>
                    <Link to={url_read_more}>{title.toUpperCase()}</Link>
                </h6>
                <div className="art-item-author">
                    <p className="art author">
                        <span className="title-author">author</span>: <span className="content-author"> {author}</span>
                    </p>
                    <p className="art data">
                        <span className="title-author">data</span>: <span className="content-author"> {data}</span>
                    </p>
                    
                </div>
            </div>
            <div className="art-item-excerpt">
                <p>
                    <Link to={url_read_more}>
                        {excerpt}
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
                    </li>
                    <li className="links-item">
                        <Link to={url_read_more}><NextComponent className="icon-link" /></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Article;
