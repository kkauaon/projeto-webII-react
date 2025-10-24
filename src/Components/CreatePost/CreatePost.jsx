import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import CustomField from '../CustomField';
import CustomTextArea from '../CustomTextArea';
import './CreatePost.scss';

function CreatePost() {
    const initialValues = {
        title: '',
        posttext: '',
        username: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().trim().required('Você deve escrever um título!'),
        posttext: Yup.string().trim().required('Digite a mensagem!'),
        username: Yup.string()
            .trim()
            .min(3, 'Seu nome de usuário deve ter no mínimo 3 caracteres!')
            .max(15, 'Seu nome de usuário deve ter no máximo 15 caracteres!')
            .required('Você deve se identificar!'),
    });

    const onSubmit = data => {
        api.post('/posts', data).then(response => {
            console.log('Post adicionado com sucesso!!!');
            window.location.reload();
        });
    };

    return (
        <div className="createPostPage">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <div className="formImgUser">
                        <img
                            src="/no-photo.png"
                        />
                        <div>
                            <p className="espaco" />
                            <div id="inputCreatePostUser">
                                <Field
                                    autoComplete="off"
                                    id="inputCreatePostUser"
                                    name="username"
                                    placeholder="Seu nome de usuário"
                                    component={CustomField}
                                />
                                <hr />
                            </div>
                            <br />
                            <Field
                                autoComplete="off"
                                id="inputCreatePostTitle"
                                name="title"
                                placeholder="Título da Postagem"
                                component={CustomField}
                            />
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
                            <div className="selecionaveis">
                                <button type="submit">Postar</button>
                            </div>
							<p className="espaco" />
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default CreatePost;
