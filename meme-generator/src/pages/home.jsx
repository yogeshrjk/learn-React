import React, {useEffect, useState} from 'react';
import MemeCard from "../components/card.jsx";
import {getMemes} from "../api/memes.js";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getMemes().then((memes) => {
            setData(memes.data.memes);
        });
    }, []);

    return (
        <div className="row">
            {data.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                data.map((e) => (
                    <MemeCard key={e.id} img={e.url} title={e.name}/>
                ))
            )}
        </div>
    );
};

export default Home;