import styles from './ModulosBase.module.css'

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';

import ContentPage from '../../layout/ContentPage';

function Modulo4() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    let codeExample = [`arquivo = open('aventura.txt', 'w')
arquivo.write('Era uma vez, um aventureiro que explorava o mundo dos arquivos em Python. \\n')
arquivo.close()
# o \\n é utilizado para quebrar a linha dentro do arquivo, nesse caso após a palavra 'Python', iremos para a próxima linha do arquivo.
`,

`arquivo = open('aventura.txt', 'r')
conteudo = arquivo.read()
print(conteudo) # retorna 'Era uma vez, um aventureiro que explorava o mundo dos arquivos em Python.'
arquivo.close()`,

`arquivo = open('aventura.txt', 'r')
for linha in arquivo:
    print(linha)
arquivo.close()`,

`arquivo = open('aventura.txt', 'a')
arquivo.write('O aventureiro encontrou um pergaminho misterioso.\\n')
arquivo.close()`,

`arquivo = open('aventura.txt', 'r+')
conteudo = arquivo.read()
arquivo.write('\\nE assim, a jornada continuou com novos desafios.\\n')
arquivo.close()`,

`import os
# Deletando o arquivo
os.remove('aventura.txt')`,]

return (
    <ContentPage
    titles={['O que são arquivos?', 'Criando arquivos', 'Lendo arquivos', 'Editando arquivos', 'Deletando arquivos']}
    subtitles={['Ler um arquivo inteiro',
        'Ler linha por linha',
        'Anexando conteúdo',
        'Lendo e escrevendo']}
    num_subtitles = {[0, 0, 2, 2, 0]} 
    customClass="your-custom-class">
        <div className={styles.title_module}><h2>Módulo 4</h2></div>
        <div className={styles.topic}>
            <p>Bem-vindos, jovens programadores, ao último módulo do nosso épico curso de Python! Preparem-se para uma aventura final que os levará ao misterioso Reino dos Arquivos Perdidos. Nessa jornada, vocês aprenderão a desbravar e manipular arquivos com maestria, usando o poder da programação Python.</p>
        </div>
        <div className={styles.topic}>
            <h1 id='O que são arquivos?'>O Que São Arquivos?</h1>
            <p>Imaginem que vocês estão em uma biblioteca gigantesca, cheia de livros de todos os tipos. Cada livro contém informações valiosas, histórias incríveis e segredos antigos. No mundo digital, esses "livros" são chamados de arquivos. Eles podem guardar textos, imagens, músicas, vídeos e muito mais. Em Python, nós temos a habilidade de abrir esses livros, ler suas histórias, escrever novas páginas e até criar nossos próprios tomos de conhecimento!</p>
        </div>
        <div className={styles.topic}>
            <h1 id='Criando arquivos'>Criando Arquivos</h1>
            <p>Para criar um arquivo, utilizamos a função <span>open( )</span> com o modo de escrita <span>('w')</span>. Se o arquivo não existir, ele será criado; se já existir, seu conteúdo será apagado:</p>
            <h3>Criando um novo arquivo</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExample[0]}
                </code>
            </pre>
        </div>
        <div className={styles.topic}>
            <h1 id='Lendo arquivos'>Lendo Arquivos</h1>
            <p>Depois de criar um arquivo, podemos ler seu conteúdo. Para isso, usamos o modo de leitura <span>('r')</span>. Vamos ver duas maneiras de ler arquivos:</p>
            <h2 id='Ler um arquivo inteiro'>Ler o arquivo inteiro de uma vez:</h2>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExample[1]}
                </code>
            </pre>
            <h2 id='Ler linha por linha'>Ler o arquivo linha por linha:</h2>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExample[2]}
                </code>
            </pre>
        </div>
        <div className={styles.topic}>
            <h1 id='Editando arquivos'>Editando Arquivos</h1>
            <p>Para editar um arquivo, podemos usar o modo de anexar <span>('a')</span> para adicionar conteúdo ou o modo de leitura e escrita <span>('r+')</span> para modificar o conteúdo existente:</p>
            <h2 id='Anexando conteúdo'>Anexando conteúdo a um arquivo:</h2>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExample[3]}
                </code>
            </pre>
            <h2 id='Lendo e escrevendo'>Lendo e escrevendo no mesmo arquivo:</h2>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExample[4]}
                </code>
            </pre>
        </div>
        <div className={styles.topic}>
            <h1 id='Deletando arquivos'>Deletando Arquivos</h1>
            <p>Para deletar um arquivo, usamos o módulo <span>os</span> e a função <span>remove( )</span>. Isso é como fazer o arquivo desaparecer completamente do sistema:</p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExample[5]}
                </code>
            </pre>
            <p>Parabéns, valentes aventureiros! Vocês agora dominam a arte de criar, ler, editar e deletar arquivos em Python. Com essas habilidades, estão prontos para enfrentar qualquer desafio no mundo digital. Continuem explorando e descobrindo, pois o universo da programação está cheio de segredos e maravilhas esperando por vocês.<br /><br />A aventura continua!</p>
        </div>
        <div className={styles.buttonContainerLeft}>
            <a href='modulo-3'>Módulo Anterior</a>
        </div>
    </ContentPage>

)
}

export default Modulo4;