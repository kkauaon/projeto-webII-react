import { Field, Form, Formik } from 'formik';
import './Auth.scss';

import * as Yup from 'yup';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BorderField from '../../Components/BorderField';
import Loader from '../../Components/Loader/Loader';

function Login() {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .trim()
            .min(3, 'Seu nome de usuário deve ter no mínimo 3 caracteres!')
            .max(15, 'Seu nome de usuário deve ter no máximo 15 caracteres!')
            .required('Você deve se identificar!'),
        password: Yup.string()
            .trim()
            .min(6, 'A senha deve ter no mínimo 6 caracteres!')
            .required('Você deve fornecer uma senha!'),
    });

    const onSubmit = data => {
		setLoading(true);
        api.post('/users/login', data).then(user => {
			setLoading(false);
			console.log('Login realizado com sucesso!!! Bem-vindo ' + user.data.username);
			navigate('/');
		}).catch(err => {
			setLoading(false);
			setError(err.response?.data?.error || 'Ocorreu um erro ao realizar o login.');
			console.error(err);
		});
    };

    return (
        <div className="authContainer">
            <img src="/x.png" alt="Logo" width={300} />
            <div>
                <h1>Acontecendo agora</h1>
				<br />
				<br />
                <h2>Entre na sua conta</h2>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="loginFormContainer">
                        <Field
                            autoComplete="off"
                            name="username"
                            placeholder="Nome de usuário"
                            component={BorderField}
							containerClassName="loginFormField"
                        />
                        <Field
                            autoComplete="off"
                            type="password"
                            name="password"
                            placeholder="Senha"
                            component={BorderField}
							containerClassName="loginFormField"
                        />
                        <button type="submit">
							{loading && <Loader size={8} isLoading={loading} />}
                            Entrar
                        </button>

						{error && (
							<p className="errorMessage">{error}</p>
						)}

						<p className='espaco'></p>

						<h3>Não tem uma conta?</h3>

						<button className='createAccountButton' onClick={() => navigate('/register')}>
							Criar uma conta
						</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;
