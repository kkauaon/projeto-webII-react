import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Post from '../../Components/Post/Post';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Loader from '../../Components/Loader/Loader';
import './Home.scss';

function Home() {
    const [loading, setLoading] = useState(true);
    const [listOfPosts, setOfPosts] = useState([]);
	
    let navigate = useNavigate();

    useEffect(() => {
        api.get('/posts')
            .then(response => {
                console.log('Posts carregados.');
                setOfPosts(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <CreatePost />
            <hr />
            {loading ? (
                <div className="loaderContainer">
                    <Loader size={24} />
                </div>
            ) : (
                listOfPosts.map((value, key) => <Post key={key} data={value} isClickable={true} />)
            )}
        </div>
    );
}

export default Home;
