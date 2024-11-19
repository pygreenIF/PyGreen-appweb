import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../layout/Container';
import styles from './UserPage.module.css';
import Axios from "axios";
import profileImage from '../../img/user-images/pygreen-person.png'

function UserPage() {
    const { nickname } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get(`http://localhost:3001/user/${nickname}`);
                console.log(response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Erro ao buscar os dados do usuário:", error);
            }
        };

        fetchUserData();
    }, [nickname]);

    return (
        <Container>
            <div className={styles.container}>
                <h1>PERFIL</h1>
                <div className={styles.userInfo}>
                    {userData ? (
                        <>
                            <img
                                className={styles.profileImage}
                                src={profileImage} 
                                alt={userData.Nickname} 
                            />
                            <h2>{userData.Nome} {userData.Sobrenome}</h2>
                            <p>@{userData.Nickname}</p>
                            <p>ID: <span className={styles.idUser}>{userData.UserID}</span></p> {/* Exibir ID */}
                        </>
                    ) : (
                        <p>Carregando dados do usuário...</p>
                    )}
                </div>
                {userData && (
                    <div className={styles.progressBarContainer}>
                        <p>Progresso: {userData.Porcentagem}%</p>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progress}
                                style={{ width: `${userData.Porcentagem}%` }}
                            ></div>
                        </div>
                    </div>
                )}
                {/* <div>
                    <button>Mudar infos</button>
                </div> */}
            </div>
        </Container>
    );
}

export default UserPage;
