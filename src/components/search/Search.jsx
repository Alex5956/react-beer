import React from "react";
import './search.css';

export const Search = () => {

    return (
        <div className={'search'}>
            <input type="search"
                   name="search"
                   placeholder='Recherche'
                   id="search"/>
        </div>
    );
}
