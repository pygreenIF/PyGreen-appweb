import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate('/auth');
            return;
        }

        Axios.get("http://localhost:3001/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setUserData(response.data);
        }).catch((error) => {
            console.error(error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                alert("Sessão expirada. Faça login novamente.");
                localStorage.removeItem("token");
                navigate('/auth');
            }
        });
    }, [navigate]);

    if (!userData) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>Perfil do Usuário</h1>
            <p><strong>Nome:</strong> {userData.Nome} {userData.Sobrenome}</p>
            <p><strong>Usuário:</strong> {userData.Nickname}</p>
            <p><strong>Email:</strong> {userData.Email}</p>
            <p><strong>Progresso:</strong> {userData.Porcentagem}%</p>
            {userData.ImageCaminho && (
                <img src={`http://localhost:3001/${userData.ImageCaminho}`} alt="Imagem de Perfil" />
            )}
        </div>
    );
}

export default Profile;