import styles from './Modules.module.css'

import Module from '../modules/Module'

function Modules() {
    return(
        <section className={styles.home_container}>
            <div className={styles.title_modules}>
                <h1>Módulos</h1>
            </div>
            <Module contents={['Métodos de saída e entrada', 'Operadores de atribuição, variáveis e constantes', 'Tipos de dados (Int, bool, float, str)', 'Operadores aritméticos']} num_module='1' link='modulo-1'/>
            <Module contents={['Condições if, elif e else e operadores de comparação', 'Operadores lógicos', 'Laço de repetição for e iterações', 'Early exit com break e continue', 'Laço de repetição while']} num_module='2' link='modulo-2'/>
            <Module contents={['Funções', 'Vetores multidimensionais', 'Strings e listas como iterável', 'Dicionários', 'Vetores e índices']} num_module='3' link='modulo-3'/>
            <Module contents={['Criar arquivos', 'Deletar arquivos', 'Editar arquivos', 'Ler arquivos']} num_module='4' link='modulo-4'/>
        </section>
    )
}

export default Modules