import React, {useState, useEffect} from "react";
import {getBeers} from "../../services/beerHttp";
import {Beer} from "../beer/Beer";

export const Home = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        getBeers().then(tabBeers => {
            if (tabBeers !== null) {
                setBeers(tabBeers);
            } else {
                alert('Erreur lors de la requête getBeers');
            }
        });
    }, []);

    return (
        <section className={'beers'}>

            {
                beers.length > 0 &&
                beers.map( beer => <Beer key={beer.id} infos={beer} />)
            }

        </section>
    );
}
