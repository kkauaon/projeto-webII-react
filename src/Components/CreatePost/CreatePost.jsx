import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import CustomField from '../CustomField';
import CustomTextArea from '../CustomTextArea';
import './CreatePost.scss';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import Filler from '../Filler';
import Home from '../../Pages/Home/Home';
import { IoClose } from 'react-icons/io5';

function CreatePost({ userId, isPage = false }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
	const [userIdState, setUserIdState] = useState(userId);

	const navigate = useNavigate();

    const initialValues = {
        title: '',
        posttext: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().trim().required('Você deve escrever um título!'),
        posttext: Yup.string().trim().required('Digite a mensagem!'),
    });

	useEffect(() => {
		if (isPage) {
			api.get('/users/me')
				.then(response => {
					setUserIdState(response.data.id);
				})
				.catch(err => {
					console.error(err);
					setUserIdState(undefined);
				});
		}
	}, []);

    const onSubmit = data => {
        setLoading(true);
        api.post('/posts', data)
            .then(response => {
                setLoading(false);
                console.log('Post adicionado com sucesso!!!');
                if (isPage) {
					navigate('/');
				} else {
					window.location.reload();
				}
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
                setError(
                    err.response?.data?.error ||
                        'Ocorreu um erro ao criar o post.'
                );
            });
    };

    return (
        <>
			{isPage && <Home />}
			{isPage && <div className="createPostOverlayBackdrop"></div>}
            <div className={`createPostPage ${isPage ? 'createPostOverlay' : ''}`}>
				{isPage && <Link to="/" className='createPostCloseButton'>
					<IoClose size={24} />
				</Link>}
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <div className="formImgUser">
                            <img
                                src={`https://picsum.photos/seed/${userIdState}/64/64/`}
                            />
                            <div>
                                <div style={{ height: 8 }}></div>
                                <div id="inputCreatePostUser">
                                    <Field
                                        autoComplete="off"
                                        id="inputCreatePostTitle"
                                        name="title"
                                        placeholder="Título da Postagem"
                                        component={CustomField}
                                    />
                                    <hr />
                                </div>

                                <br />
                                <Field
                                    component={CustomTextArea}
                                    autoComplete="off"
                                    id="inputCreatePostTextarea"
                                    name="posttext"
                                    placeholder="O que está acontecendo?"
                                />
                                <hr />
                                <p className="espaco" />
                                {error && (
                                    <p className="errorMessage">{error}</p>
                                )}
                                <div className="selecionaveis">
                                    <button
                                        disabled={loading}
                                        style={
                                            loading
                                                ? { cursor: 'progress' }
                                                : undefined
                                        }
                                        type="submit"
                                    >
                                        Postar
                                    </button>
                                </div>
                                <p className="espaco" />
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
export default CreatePost;
