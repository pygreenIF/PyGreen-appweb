import styles from './Modules.module.css'

import Module from '../modules/Module'

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Modules() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
        }
    }, [navigate]);
    
    return(
        <section className={styles.home_container}>
            <div className={styles.title_modules}>
                <h1>Módulos <span>.</span></h1>
            </div>
            <Module 
            contents={['Métodos de entrada e saída', 'Operadores de atribuição, variáveis e constantes', 'Tipos de dados (Int, bool, float, str)', 'Operadores aritméticos']} 
            num_module='0' 
            link='modulo-0'/>

            <Module 
            contents={['Métodos de entrada e saída', 'Operadores de atribuição, variáveis e constantes', 'Tipos de dados (Int, bool, float, str)', 'Operadores aritméticos']} 
            num_module='1' 
            link='modulo-1'/>
            
            <Module 
            contents={['Condições if, elif e else e operadores de comparação', 'Operadores lógicos', 'Laço de repetição for e iterações', 'Laço de repetição while', 'Early exit com break e continue']} 
            num_module='2' 
            link='modulo-2'/>

            <Module 
            contents={['Listas', 'Dicionários', 'Vetores e índices', 'Funções']} 
            num_module='3' 
            link='modulo-3'/>

            <Module 
            contents={['Criar arquivos','Ler arquivos', 'Editar arquivos', 'Deletar arquivos']} 
            num_module='4' 
            link='modulo-4'/>
        </section>
    )
}

export default Modules