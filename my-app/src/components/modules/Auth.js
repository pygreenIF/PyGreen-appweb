import React, { useEffect } from 'react';
import Container from '../layout/Container';
import styles from './Auth.module.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from "axios"

function Auth() {
    useEffect(() => {
        const signUpBtn = document.getElementById('signUpBtn');
        const signInBtn = document.getElementById('signInBtn');
        const signUpBtnArrow = document.getElementById('signUpBtnArrow');
        const signInBtnArrow = document.getElementById('signInBtnArrow');
        const container = document.getElementById('container');

        const addSignUpMode = () => {
            container.classList.add(styles['sign-up-mode']);
        };

        const removeSignUpMode = () => {
            container.classList.remove(styles['sign-up-mode']);
        };

        signUpBtn.addEventListener('click', addSignUpMode);
        signInBtn.addEventListener('click', removeSignUpMode);
        signUpBtnArrow.addEventListener('click', addSignUpMode);
        signInBtnArrow.addEventListener('click', removeSignUpMode);

        return () => {
            signUpBtnArrow.removeEventListener('click', addSignUpMode);
            signInBtnArrow.removeEventListener('click', removeSignUpMode);
        };
    }, []);

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            Nickname: values.Nickname,
            Senha: values.Senha,
        }).then((response) => {
            console.log(response)
        })
    };
    const validationLogin = yup.object().shape({
        Nickname: yup.string().required('Este campo é obrigatório'),
        Senha: yup.string().min(8, 'A senha deve conter 8 caracteres.').required('Este campo é obrigatório'),
    });

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            Nome: values.Nome,
            Sobrenome: values.Sobrenome,
            Nickname: values.Nickname,
            Email: values.Email,
            Senha: values.Senha
        }).then((response) => {
            console.log(response);
        })
    };
    const validationRegister = yup.object().shape({
        Nome: yup.string().max(255, 'Você ultrapassou o limite de caracteres').required('Este campo é obrigatório'),
        Sobrenome: yup.string().max(255, 'Você ultrapassou o limite de caracteres').required('Este campo é obrigatório'),
        Nickname: yup.string().max(100, 'Você ultrapassou o limite de caracteres').required('Este campo é obrigatório'),
        Email: yup.string().email('Não é um email').max(255, 'Você ultrapassou o limite de caracteres').required('Este campo é obrigatório'),
        Senha: yup.string().min(8, 'A senha deve conter 8 caracteres').required('Este campo é obrigatório'),
        ConfirmarSenha: yup.string().oneOf([yup.ref('Senha'), null], 'As senhas não são iguais'),
    });

    return (
        <Container>
            <div id='container' className={styles.container}>
                <div id='loginForm' className={styles.form_login_container}>
                    <div className={styles.title}>
                        <h1>ENTRAR NO UNIVERSO PY<span>GREEN</span></h1>
                        <button id="signUpBtnArrow"><FaChevronRight size={20} /></button>
                    </div>
                    <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                        <Form className={styles.form_login}>
                            <div className={styles.form_login_group}>
                                <Field name='Nickname' className={styles.form_field} placeholder="Usuário" />
                                <ErrorMessage component='span' name='Nickname' className={styles.form_error} />
                            </div>
                            <div className={styles.form_login_group}>
                                <Field name='Senha' className={styles.form_field} placeholder="Senha" />
                                <ErrorMessage component='span' name='Senha' className={styles.form_error} />
                            </div>
                            <button type='submit'>ENTRAR</button>
                        </Form>
                    </Formik>
                    <div className={styles.options}>
                        <p>Não tem uma conta?</p>
                        <button id="signUpBtn">Inscreva-se</button>
                    </div>
                </div>

                <div id='signupForm' className={styles.form_signup_container}>
                    <div className={styles.title}>
                        <button id="signInBtnArrow"><FaChevronLeft size={20} /></button>
                        <h1>CADASTRE-SE</h1>
                    </div>
                    <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                        <Form className={styles.form_signup}>
                            <div className={styles.form_signup_group}>
                                <Field name='Nome' className={styles.form_field} placeholder="Nome" />
                                <ErrorMessage component='span' name='Nome' className={styles.form_error} />
                            </div>
                            <div className={styles.form_signup_group}>
                                <Field name='Sobrenome' className={styles.form_field} placeholder="Sobrenome" />
                                <ErrorMessage component='span' name='Sobrenome' className={styles.form_error} />
                            </div>
                            <div className={styles.form_signup_group}>
                                <Field name='Nickname' className={styles.form_field} placeholder="Usuário" />
                                <ErrorMessage component='span' name='Nickname' className={styles.form_error} />
                            </div>
                            <div className={styles.form_signup_group}>
                                <Field name='Email' className={styles.form_field} placeholder="Email" />
                                <ErrorMessage component='span' name='Email' className={styles.form_error} />
                            </div>
                            <div className={styles.form_signup_group}>
                                <Field name='Senha' className={styles.form_field} placeholder="Senha" />
                                <ErrorMessage component='span' name='Senha' className={styles.form_error} />
                            </div>
                            <div className={styles.form_signup_group}>
                                <Field name='ConfirmarSenha' className={styles.form_field} placeholder="Confirme sua senha" />
                                <ErrorMessage component='span' name='ConfirmarSenha' className={styles.form_error} />
                            </div>
                            <button type='submit'>CADASTRAR</button>
                        </Form>
                    </Formik>
                    <div className={styles.options}>
                        <p>Já tem uma conta?</p>
                        <button id="signInBtn">Entre</button>
                    </div>
                </div>
                <div className={styles.aside_art} id="asideArt"></div>
            </div>
        </Container>
    );
}

export default Auth;