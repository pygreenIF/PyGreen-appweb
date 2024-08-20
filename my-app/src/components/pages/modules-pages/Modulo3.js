import styles from './ModulosBase.module.css'

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';

import ContentPage from '../../layout/ContentPage';

function Modulo3() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    
    <ContentPage>
        <div className={styles.title_module}><h2>Módulo 3</h2></div>
        <div className={styles.topic}>
            <h1 id='Funcoes'>Funções</h1>
        </div>
    </ContentPage>
}


export default Modulo3;