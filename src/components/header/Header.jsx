import React from "react";
import {Link} from "react-router-dom";
import {Search} from "../search/Search";
import './header.css';

export const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <h1>Beer App</h1>
            </Link>
            <Search />
        </header>
    )
}
