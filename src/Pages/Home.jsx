import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Post from '../Components/Post';

function Home() {
    const [listOfPosts, setOfPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        api.get('/posts').then(response => {
            setOfPosts(response.data);
        });
    }, []);
    return (
        <div>
            {listOfPosts.map((value, key) => <Post key={key} data={value} />)}
        </div>
    );
}

export default Home;
