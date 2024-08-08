import styles from './ModulosBase.module.css'

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';

import ContentPage from '../../layout/ContentPage';

function Modulo2() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    let codeExample = [
`# Define a variável 'tesouro' como True (verdadeiro)
tesouro = True

# Verificando se 'tesouro' é True
if tesouro: 
    print("Você encontrou um tesouro!") # Imprime a mensagem se 'tesouro' for True`,

]

    return (
        <ContentPage>
            <div className={styles.title_module}><h2>Módulo 2</h2></div>
            <div className={styles.topic}>
                <p>Aventureiro(a), chegou o momento de desvendar outro artefato poderoso no mundo da programação: as condições e os operadores de comparação. Em Python, essas ferramentas permitem que você tome decisões com base em diferentes situações, como se tivesse um mapa mágico que lhe indica o caminho certo a seguir em cada encruzilhada.</p>
                <h1>Condições if, elif e else</h1>
                <p>No Python, as condições são usadas para executar blocos de códigos diferentes com base em certas condições, semelhantes a escolher uma rota diferente dependendo do que você encontra em sua jornada.</p>
                <h2>A Condição if</h2>
                <p>A condição if é como um guardião no início de um caminho. Se a condição for verdadeira, você pode seguir por aquele caminho:</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[0]}
                    </code>
                </pre>
            </div>
        </ContentPage>
    )
}

export default Modulo2;