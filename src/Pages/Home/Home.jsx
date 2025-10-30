import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Post from '../../Components/Post/Post';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Loader from '../../Components/Loader/Loader';
import './Home.scss';
import { IoWarning } from 'react-icons/io5';

function Home() {
    const [loading, setLoading] = useState(true);
    const [listOfPosts, setOfPosts] = useState([]);
	const [hasError, setHasError] = useState(false);
	
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
				setHasError(true);
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
            ) : hasError ? (
                <div className="errorContainer">
                    <p>Ocorreu um erro ao carregar os posts.</p>
                </div>
            ) : (
                listOfPosts.map((value, key) => <Post key={key} data={value} isClickable={true} />)
            )}
        </div>
    );
}

export default Home;
