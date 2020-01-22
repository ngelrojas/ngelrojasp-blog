import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.scss';

export const Card = ({id, cat_title, cat_title_slug}) => {
    return(
        <section className="topic-card">
            <div className="card-header">
                <Link to={`/topics/${cat_title_slug}`}><h1>{cat_title}</h1></Link> 
            </div>
            <div className="card-body">
                <div className="pragraph">
                    <Link to={`/topics/${cat_title_slug}`}>
                        <p>
                            Python is an interpreted, object-oriented, high-level programming 
                            language with dynamic semantics. Its high-level built in data structures, 
                            combined with dynamic typing and dynamic binding, make it very attractive for 
                            Rapid Application Development.
                        </p>
                    </Link>
                </div>
                <div className="qty_posts">
                    <Link to={`/topics/${cat_title_slug}`}>52</Link>
                </div>
            </div>
        </section>
    )
}
