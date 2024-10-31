import styles from './Modules.module.css';
import Module from '../modules/Module';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Para fazer requisições

function Modules() {
    const [userProgress, setUserProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
        } else {
            // Aqui você deve fazer uma requisição para obter o progresso do usuário
            const fetchUserProgress = async () => {
                try {
                    const response = await axios.get('/api/progress'); // Suponha que você tenha essa rota
                    setUserProgress(response.data.ProgressoID); // Atualiza o progresso do usuário
                } catch (error) {
                    console.error("Erro ao buscar progresso do usuário:", error);
                }
            };
            fetchUserProgress();
        }
    }, [navigate]);

    const modules = [
        { num_module: '0', link: 'modulo-0', contents: ['Métodos de entrada e saída', 'Operadores de atribuição, variáveis e constantes', 'Tipos de dados (Int, bool, float, str)', 'Operadores aritméticos'] },
        { num_module: '1', link: 'modulo-1', contents: ['Métodos de entrada e saída', 'Operadores de atribuição, variáveis e constantes', 'Tipos de dados (Int, bool, float, str)', 'Operadores aritméticos'] },
        { num_module: '2', link: 'modulo-2', contents: ['Condições if, elif e else e operadores de comparação', 'Operadores lógicos', 'Laço de repetição for e iterações', 'Laço de repetição while', 'Early exit com break e continue'] },
        { num_module: '3', link: 'modulo-3', contents: ['Listas', 'Dicionários', 'Vetores e índices', 'Funções'] },
        { num_module: '4', link: 'modulo-4', contents: ['Criar arquivos', 'Ler arquivos', 'Editar arquivos', 'Deletar arquivos'] },
    ];

    return (
        <section className={styles.home_container}>
            <div className={styles.title_modules}>
                <h1>Módulos <span>.</span></h1>
            </div>
            {modules.map((module, index) => (
                <Module
                    key={module.num_module}
                    contents={module.contents} // Mantém os conteúdos originais
                    num_module={module.num_module}
                    link={userProgress >= index ? module.link : '#'} // Habilita o link apenas se o progresso permitir
                    disabled={userProgress < index} // Desabilita o módulo se o progresso não permitir
                />
            ))}
        </section>
    );
}

export default Modules;
