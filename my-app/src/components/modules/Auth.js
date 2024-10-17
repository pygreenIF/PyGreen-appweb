import Container from '../layout/Container'
import styles from './Auth.module.css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

function Auth() {
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.form_login_container}>
                    <div className={styles.title}>
                        <h1>ENTRAR NO UNIVERSO PY<span>GREEN</span></h1>
                        <FaChevronRight size={20}/>
                    </div>
                    <Formik initialValues={{}}>
                        <Form className={styles.form_login}>
                            <div className={styles.form_login_group}> 
                                <Field name='Nickname' 
                                className={styles.form_field}
                                placeholder="Usuário"/>

                                <ErrorMessage 
                                component='span'
                                name='Nickname'
                                className={styles.form_error}/>
                            </div>
                            <div className={styles.form_login_group}> 
                                <Field name='Senha' 
                                className={styles.form_field}
                                placeholder="Senha"/>

                                <ErrorMessage 
                                component='span'
                                name='Senha'
                                className={styles.form_error}/>
                            </div>
                            <button type='submit'>Entrar</button>
                            <div className={styles.options}>
                                <p>Não tem uma conta?</p>
                                <button id="signUpBtn">Inscreva-se</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                
                <div className={styles.form_signup_container}>
                    <div className={styles.title}>
                        <FaChevronLeft size={20}/>
                        <h1>Cadastre-se</h1>
                    </div>
                    <Formik initialValues={{}}>
                        <Form className={styles.form_signup}>
                            <div className={styles.form_signup_group}> 
                                <Field name='Nickname' 
                                className={styles.form_field}
                                placeholder="Usuário"/>

                                <ErrorMessage 
                                component='span'
                                name='Nickname'
                                className={styles.form_error}/>
                            </div>
                            <div className={styles.form_signup_group}> 
                                <Field name='Senha' 
                                className={styles.form_field}
                                placeholder="Senha"/>

                                <ErrorMessage 
                                component='span'
                                name='Senha'
                                className={styles.form_error}/>
                            </div>
                            <button type='submit'>Entrar</button>
                            <div className={styles.options}>
                                <p>Já tem uma conta?</p>
                                <button id="signInBtn">Entre</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className={styles.aside_art} id="asideArt"></div>
            </div>
        </Container>
)}

export default Auth;