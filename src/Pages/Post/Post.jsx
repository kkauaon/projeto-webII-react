import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { IoArrowBack } from 'react-icons/io5';
import './Post.scss';
import { default as PostComponent } from '../../Components/Post/Post';
import Loader from '../../Components/Loader/Loader';
import { timeAgo } from '../../Util/util';
import Comment from '../../Components/Comment/Comment';
import Navbar from '../../Components/Navbar/Navbar';
import Filler from '../../Components/Filler';

function Post() {
    let { id } = useParams();

    const [loadingPost, setLoadingPost] = useState(true);
    const [loadingComments, setLoadingComments] = useState(true);
    const [loadingAddComment, setLoadingAddComment] = useState(false);

    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

	const [user, setUser] = useState(undefined);

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then(response => {
                setPostObject(response.data);
                setLoadingPost(false);
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
                setLoadingPost(false);
            });

        api.get(`/comments/${id}`)
            .then(response => {
                setComments(response.data);
                setLoadingComments(false);
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
                setLoadingComments(false);
            });

		api.get('/users/me')
			.then(response => {
				setUser(response.data);
			})
			.catch(err => {
				console.error(err);
			});
    }, []);

    const addComment = () => {
        setLoadingAddComment(true);

        api.post('/comments', {
            commentBody: newComment,
            PostId: id,
        })
            .then(res => {
                const commentToAdd = { commentBody: newComment };
                setComments([...comments, res.data]);
                setNewComment('');
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoadingAddComment(false);
            });
    };

    return (
        <>
			<Navbar />
            <div>
                <div className="postpageheader">
                    <IoArrowBack
                        size={24}
						color="white"
                        className="backicon"
                        onClick={() => window.history.back()}
                    />
                    <h2>Post</h2>
                </div>
                <hr />
                {loadingPost ? (
                    <div className="loaderContainer">
                        <Loader size={24} />
                    </div>
                ) : (
                    <PostComponent data={postObject} isClickable={false} />
                )}
                {user && <div className="addCommentContainer">
                    <img src={`https://picsum.photos/seed/${user?.id}/64/64/`} />
                    <textarea
                        placeholder="Postar sua resposta"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                    />
                    <button
                        disabled={!newComment.trim() || loadingAddComment}
                        style={
                            loadingAddComment
                                ? { cursor: 'progress ' }
                                : undefined
                        }
                        onClick={() => addComment()}
                    >
                        Responder
                    </button>
                </div>}
                <hr />
                <div className="commentsContainer">
                    {loadingComments ? (
                        <div className="loaderContainer">
                            <Loader size={24} />
                        </div>
                    ) : (
                        comments.map((value, key) => {
                            return (
                                <>
                                    <Comment key={key} data={value} />
                                    <hr />
                                </>
                            );
                        })
                    )}
                </div>
            </div>
			<Filler	/>
        </>
    );
}

export default Post;
