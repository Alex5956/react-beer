import React from "react";
import './beer.css';
import {Link} from "react-router-dom";

export const Beer = ({infos}) => {

    const shortText = (str) => {
        if (str.length > 99) {
            return str.slice(0, 100) + '...';
        }
        return str;
    }

    return (
        <Link to={'/beers/' + infos.id}>
            <article>
                <h4>{infos.name}</h4>
                <figure>
                    <div>
                        <img src={infos.image_url} alt={infos.name}/>
                    </div>
                    <figcaption>{shortText(infos.description)}</figcaption>
                </figure>
            </article>
        </Link>
    );
}
