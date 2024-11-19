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

    let codeExamples = [`# Uma lista de itens
itens_da_mochila = ["Poção de Cura", "Espada de Ferro", "Escudo de Madeira"]

# Uma lista de números
numeros_magicos = [7, 3, 42, 8]

# Uma lista mista
dados_diversos = ["Artemis", 100, True, 25.6]`,

    // Acessando Elementos com Índices
    `# Acessando elementos pelo índice
primeiro_numero = numeros_magicos[0]  # 7
segundo_heroi = nomes_de_herois[1]    # "Zeus"
print("Primeiro número mágico:", primeiro_numero)
print("Segundo herói:", segundo_heroi)`,

`# Índices negativos
ultimo_item = dados_diversos[-1]  # True
penultimo_item = dados_diversos[-2]  # 25.6
print("Último item da lista mista:", ultimo_item)
print("Penúltimo item da lista mista:", penultimo_item)`,

    // Modificando Itens em uma Lista
    `# Modificando um item
itens_da_mochila[1] = "Machado de Batalha"
print(itens_da_mochila)`,

    // Adicionando Itens
    `# Usando append() para adicionar um item ao final
itens_da_mochila.append("Capa Invisível")
print(itens_da_mochila)

# Usando insert() para adicionar um item em uma posição específica
itens_da_mochila.insert(1, "Poção de Mana")
print(itens_da_mochila)`,

    // Removendo Itens
    `# Usando remove() para remover um item pelo valor
itens_da_mochila.remove("Escudo de Madeira")
print(itens_da_mochila)

# Usando pop() para remover um item pelo índice
item_removido = itens_da_mochila.pop(2)
print(itens_da_mochila)
print("Item removido:", item_removido)`,

    // Iterando Sobre uma Lista
    `# Iterando sobre os itens da mochila
for item in itens_da_mochila:
    print("Item na mochila:", item)`,

    // Criando Dicionários
    `# Um dicionário de itens
itens_magicos = {
    "Poção de Cura": 10,
    "Espada de Ferro": 15,
    "Escudo de Madeira": 5
}

# Um dicionário com diferentes tipos de valores
heroi = {
    "nome": "Artemis",
    "classe": "Guerreiro",
    "nivel": 5,
    "vida": 100,
    "inventario": ["Poção de Cura", "Espada de Ferro"]
}`,

    // Acessando Valores em um Dicionário
    `# Acessando valores por chave
poções_de_cura = itens_magicos["Poção de Cura"]
nome_do_heroi = heroi["nome"]
print("Quantidade de Poções de Cura:", poções_de_cura)
print("Nome do Herói:", nome_do_heroi)`,

    // Modificando Valores em um Dicionário
    `# Modificando um valor
itens_magicos["Poção de Cura"] = 20
heroi["vida"] = 120
print("Nova quantidade de Poções de Cura:", itens_magicos["Poção de Cura"])
print("Nova vida do herói:", heroi["vida"])`,

    // Adicionando e Removendo Itens
    `# Adicionando um novo item
itens_magicos["Anel de Invisibilidade"] = 50
print("Itens mágicos após adicionar:", itens_magicos)`,

`# Removendo um item
del itens_magicos["Escudo de Madeira"]
print("Itens mágicos após remover:", itens_magicos)`,

    // Iterando Sobre um Dicionário
    `# Iterando sobre as chaves
for item in itens_magicos:
    print("Item:", item)

# Iterando sobre as chaves e valores
for item, quantidade in itens_magicos.items():
    print(item, ":", quantidade)`,

    // Exemplo Completo
    `# Definindo o herói e seus itens mágicos
heroi = {
    "nome": "Artemis",
    "classe": "Guerreiro",
    "nivel": 5,
    "vida": 100,
    "inventario": {
        "Poção de Cura": 10,
        "Espada de Ferro": 1,
        "Escudo de Madeira": 1
    }
}

# Exibindo o status inicial do herói
print("Status inicial do herói:")
print("Nome:", heroi["nome"])
print("Classe:", heroi["classe"])
print("Nível:", heroi["nivel"])
print("Vida:", heroi["vida"])
print("Inventário:", heroi["inventario"])

# Usando uma poção de cura
heroi["vida"] += 20
heroi["inventario"]["Poção de Cura"] -= 1
print("\\nApós usar uma Poção de Cura:")
print("Vida:", heroi["vida"])
print("Inventário:", heroi["inventario"])

# Encontrando um novo item
heroi["inventario"]["Anel de Invisibilidade"] = 1
print("\\nApós encontrar um Anel de Invisibilidade:")
print("Inventário:", heroi["inventario"])

# Iterando sobre o inventário
print("\\nItens no inventário:")
for item, quantidade in heroi["inventario"].items():
print(item, ":", quantidade)`,

`def saudacao():
    print("Olá, aventureiro!")

# Chamando a função
saudacao() Retorna > Olá, aventureiro!`,

`def calcular_area_quadrado(lado):
    area = lado * lado
    return area

# Chamando a função e armazenando o resultado em uma variável
area_quadrado = calcular_area_quadrado(5)
print("A área do quadrado é:", area_quadrado) # Retorna > A área do quadrado é: 25`
];      

    return(
        <ContentPage
        titles={['Listas', 'Dicionários', 'Funções']}
        subtitles={['Criando listas',
            'Acessando índices',
            'Modificando itens',
            'Adicionando e removendo itens',
            'Iterando uma lista',
            'Criando dicionários',
            'Acessando valores',
            'Modificando valores',
            'Adicionando e removendo',
            'Iterando um dicionário',
            'Exemplo completo',
            'Exemplos'
        ]}
        num_subtitles = {[5, 6, 1]} 
        customClass="your-custom-class">
        
        <div className={styles.title_module}><h2>Módulo 3</h2></div>
        <div className={styles.topic}>
            <h1 id='Listas'>Listas como iterável</h1>
            <p>Aventureiro(a), agora que você dominou os fundamentos mais básicos, é hora de descobrir um artefato poderoso no mundo da programação: as listas. Em Python, listas são estruturas que permitem armazenar múltiplos valores em uma única variável, como se você tivesse uma mochila mágica onde pode guardar diversos itens.</p>
            <h2 id='Criando listas'>Criando Listas</h2>
            <p>Para criar uma lista, você utiliza colchetes <span>[ ]</span> e separa os itens com vírgulas. As listas podem conter qualquer tipo de dado: inteiros, strings, flutuantes, booleanos, ou até outras listas.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[0]}
                </code>
            </pre>
            <h2 id='Acessando índices'>Acessando Elementos com Índices</h2>
            <p>Cada elemento em uma lista pode ser acessado usando seu índice. O índice é um número inteiro que começa em 0 para o primeiro elemento, 1 para o segundo, e assim por diante.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[1]}
                </code>
            </pre>
            <p>Você também pode usar índices negativos para acessar elementos a partir do final da lista:</p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[2]}
                </code>
            </pre>
            <h2 id='Modificando itens'>Modificando Itens em uma Lista</h2>
            <p>Você pode modificar os itens de uma lista atribuindo novos valores aos índices específicos.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[3]}
                </code>
            </pre>
            <h2 id='Adicionando e removendo itens'>Adicionando e Removendo Itens</h2>
            <p>Python oferece métodos para adicionar e remover itens de uma lista, tornando-a uma estrutura dinâmica e flexível.</p>
            <h3>Adicionando Itens</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[4]}
                </code>
            </pre>
            <h3>Removendo Itens</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[5]}
                </code>
            </pre>
            <h2 id='Iterando uma lista'>Iterando Sobre uma Lista</h2>
            <p>Você pode usar um laço <span>for</span> para iterar sobre os itens de uma lista e realizar operações com cada um deles.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[6]}
                </code>
            </pre>
        </div>
        <div className={styles.topic}>
            <h1 id='Dicionários'>Dicionários</h1>
            <p>Prepare-se para conhecer outro artefato poderoso no mundo da programação: os dicionários. Em Python, dicionários são estruturas de dados que permitem armazenar pares de chave-valor, como se você tivesse um grimório mágico onde cada feitiço é descrito com seu nome (chave) e seus detalhes (valor).</p>
            <h2 id='Criando dicionários'>Criando Dicionários</h2>
            <p>Para criar um dicionário, você utiliza chaves <span>{ }</span> e define pares de chave-valor separados por dois pontos :. As chaves são únicas e podem ser de qualquer tipo imutável, como strings, números ou tuplas, enquanto os valores podem ser de qualquer tipo.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[7]}
                </code>
            </pre>
            <h2 id='Acessando valores'>Acessando Valores em um Dicionário</h2>
            <p>Para acessar um valor em um dicionário, você usa a chave correspondente entre colchetes <span>[ ]</span>.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[8]}
                </code>
            </pre>
            <h2 id='Modificando valores'>Modificando Valores em um Dicionário</h2>
            <p>Você pode modificar os valores de um dicionário atribuindo novos valores às chaves existentes.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[9]}
                </code>
            </pre>
            <h2 id='Adicionando e removendo'>Adicionando e Removendo Itens</h2>
            <p>Python permite adicionar novos pares de chave-valor e remover pares existentes de um dicionário.</p>
            <h3>Adicionando Itens</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[10]}
                </code>
            </pre>
            <h3>Removendo Itens</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[11]}
                </code>
            </pre>
            <h2 id='Iterando um dicionário'>Iterando Sobre um Dicionário</h2>
            <p>Você pode usar um laço for para iterar sobre as chaves, valores ou pares de chave-valor em um dicionário.</p>
            <p><b>Exemplo:</b></p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[12]}
                </code>
            </pre>
            <h2 id='Exemplo completo'>Exemplo Completo</h2>
            <p>Vamos criar um exemplo onde o herói usa um dicionário para gerenciar seu inventário e status:</p>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[13]}
                </code>
            </pre>
        </div>
        <div className={styles.topic}>
            <h1 id='Funções'>Funções</h1>
            <p>Ah, explorador destemido, deixe-me contar sobre as mágicas e poderosas funções em Python, verdadeiros feitiços que podem simplificar sua jornada nesta terra de códigos e algoritmos.</p>
            <p>Imagine uma caverna repleta de desafios, onde você precisa executar uma série de tarefas repetitivas. Uma função é como um feitiço que você conjura para realizar essas tarefas com um simples comando. Dê um nome à sua função, como "explorar_caverna", e dentro dela, coloque as instruções necessárias para enfrentar os perigos que encontrar.</p>
            <p>Quando estiver diante de uma nova caverna, não precisa mais repetir todas as instruções uma por uma. Basta invocar sua função com um comando mágico, e ela executará tudo para você, como um companheiro confiável que conhece os segredos do caminho.</p>
            <p>Mas cuidado, jovem aventureiro, assim como os feitiços requerem precisão e cuidado, suas funções também devem ser criadas com sabedoria. Escolha seus ingredientes com cautela e organize suas instruções com clareza, e você dominará os mistérios das funções em Python, desbravando novas terras e enfrentando desafios cada vez maiores em sua jornada épica!</p>
            <h3 id='Exemplos'>Função para saudação</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[14]}
                </code>
            </pre>
            <h3>Função para calcular a área de um quadrado</h3>
            <pre className={styles.codeblock}>
                <code className="language-python">
                    {codeExamples[15]}
                </code>
            </pre>
        </div>
        <div className={styles.buttonContainer}>
            <a href='modulo-2 '>Módulo Anterior</a>
            <a href='modulo-4'>Próximo Módulo</a>
        </div>
    </ContentPage>
    )
}


export default Modulo3;