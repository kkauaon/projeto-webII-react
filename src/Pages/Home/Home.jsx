import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Post from '../../Components/Post/Post';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Loader from '../../Components/Loader/Loader';
import './Home.scss';
import { IoWarning } from 'react-icons/io5';
import Filler from '../../Components/Filler';
import Navbar from '../../Components/Navbar/Navbar';

function Home() {
    const [loading, setLoading] = useState(true);
    const [listOfPosts, setOfPosts] = useState([]);
    const [hasError, setHasError] = useState(false);
	const [user, setUser] = useState(undefined);

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

		api.get('/users/me')
			.then(response => {
				setUser(response.data);
			})
			.catch(err => {
				console.error(err);
				setUser(null);
			});
    }, []);
	
    return (
		<>
			<Navbar />
			<div id="Home">
				{user && <CreatePost userId={user?.id} />}
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
					listOfPosts.map((value, key) => (
						<Post key={key} data={value} isClickable={true} />
					))
				)}
			</div>
			<Filler />
		</>

    );
}

export default Home;
