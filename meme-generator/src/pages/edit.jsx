import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Text from "../components/text.jsx";
import Button from "react-bootstrap/Button";

const Edit = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const encodedUrl = params.get("url");
    const decodedUrl = decodeURIComponent(encodedUrl);
    const [count, setCount] = useState(0);
    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {decodedUrl ? (
                <img src={decodedUrl} width="300px" alt="meme"/>
            ) : (
                <h1>Invalid or missing URL</h1>
            )}
            {
                Array(count).fill(0).map((e) => (<Text/>))
            }
            <Button variant="primary" onClick={addText}>
                Add Text
            </Button>
        </div>
    );
};

export default Edit;