import styles from './ModulosBase.module.css'

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';

import ContentPage from '../../layout/ContentPage';

function Modulo1() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    let codeExample = [`# Pedimos ao sábio o seu nome
nome = input("Qual é o seu nome?")`, 

`nome = "Gandalf" mensagem = "Olá, " + nome + "! Bem-vindo à Terra Média!"
print(mensagem)`,

`> Olá, Gandalf! Bem-vindo à Terra Média!`,

`# Perguntando ao usuário seu nome
nome = input("Qual é o seu nome, bravo aventureiro? ")
print("Bem-vindo, " + nome + "!")`,

`# Exibindo uma mensagem de boas-vindas
print("Preparando-se para a aventura...")
print("Que a sorte esteja ao seu lado!")`,

`# Pedindo ao usuário um número e dobrando seu valor
numero = input("Diga-me um número, e eu dobrarei seu valor: ")
numero = int(numero)  # Convertendo a entrada para um número inteiro
resultado = numero * 2
print("O dobro de", numero, "é", resultado)`,

`# Atribuindo um valor a uma variável
vida = 100  # Aqui, 'vida' é a variável, e 100 é o valor armazenado nela`,

`# Guardando o nome do herói em uma variável
nome_do_heroi = "Artemis"
print("O nome do herói é", nome_do_heroi)`,

`# Definindo uma constante
MAX_VIDA = 100
print("A vida máxima do herói é", MAX_VIDA)`,

`# Definindo uma constante para a vida máxima
MAX_VIDA = 100

# Atribuindo a vida inicial do herói a uma variável
vida_do_heroi = MAX_VIDA

# Usando um feitiço de entrada para obter o nome do herói
nome_do_heroi = input("Qual é o seu nome, bravo aventureiro? ")

# Exibindo uma mensagem de boas-vindas
print("Bem-vindo, " + nome_do_heroi + "! Sua vida inicial é " + str(vida_do_heroi) + ".")`,

`idade = 25
pontos_de_vida = 100`,

`distancia = 12.5
peso = 75.3`,

`nome_do_heroi = "Artemis"
mensagem = "Bem-vindo à aventura!"`,

`# Definindo uma string
frase_magica = "Abra Kadabra"

# Fatiando a string
parte1 = frase_magica[0:4]  # 'Abra'
parte2 = frase_magica[5:]   # 'Kadabra'
print("Parte 1:", parte1)
print("Parte 2:", parte2)`,

`frase_magica = "Abra Kadabra"
frase_maiuscula = frase_magica.upper()
print("Maiúscula:", frase_maiuscula) # Mostra 'ABRA KADABRA' no terminal

frase_dividida = frase_magica.split()  
print("Dividida:", frase_dividida) # Mostra ['abra', 'kadabra'] no terminal`,

`esta_vivo = True
tem_chave = False`,

`# Definindo algumas variáveis
nome_do_heroi = input("Qual é o seu nome, bravo aventureiro? ")
idade = 18
pontos_de_vida = 100
esta_vivo = True

# Exibindo uma mensagem de boas-vindas
print("Bem-vindo, " + nome_do_heroi + "!") # Mostra 'Bem-vindo, nome_do_heroi!' no terminal
print("Idade:", idade) # Mostra 'Idade: 18' no terminal
print("Pontos de Vida:", pontos_de_vida) # Mostra 'Pontos de Vida: 100' no terminal
print("Está vivo?", esta_vivo) # Mostra 'Está vivo? True' no terminal`,

`ouro_inicial = 50
ouro_encontrado = 30
ouro_total = ouro_inicial + ouro_encontrado
print("O total de ouro é:", ouro_total)`,

`vida_inicial = 100
dano_recebido = 20
vida_restante = vida_inicial - dano_recebido
print("A vida restante é:", vida_restante)`,

`forca_base = 10
multiplicador_de_forca = 2
forca_total = forca_base * multiplicador_de_forca
print("A força total é:", forca_total)`,

`total_de_ouro = 100
numero_de_companheiros = 4
ouro_por_companheiro = total_de_ouro / numero_de_companheiros
print("Ouro por companheiro:", ouro_por_companheiro)`,

`total_de_ouro = 100
custo_de_uma_espada = 15
espadas_compraveis = total_de_ouro // custo_de_uma_espada
print("Número de espadas compráveis:", espadas_compraveis)`,

`total_de_ouro = 100
custo_de_uma_espada = 15
ouro_restante = total_de_ouro % custo_de_uma_espada
print("Ouro restante após compras:", ouro_restante)`,

`base_de_poder = 3
nivel_do_feitico = 4
poder_total = base_de_poder ** nivel_do_feitico
print("O poder total do feitiço é:", poder_total)`,

`# Definindo as variáveis
ouro_inicial = 100
ouro_encontrado = 50
dano_recebido = 20
forca_base = 10
multiplicador_de_forca = 3
custo_de_uma_espada = 15

# Realizando operações aritméticas
ouro_total = ouro_inicial + ouro_encontrado
vida_restante = 100 - dano_recebido
forca_total = forca_base * multiplicador_de_forca
espadas_compraveis = ouro_total // custo_de_uma_espada
ouro_restante = ouro_total % custo_de_uma_espada
poder_total = 2 ** 3

# Exibindo os resultados
print("O total de ouro é:", ouro_total)
print("A vida restante é:", vida_restante)
print("A força total é:", forca_total)
print("Número de espadas compráveis:", espadas_compraveis)
print("Ouro restante após compras:", ouro_restante)
print("O poder total do feitiço é:", poder_total)`,
];

    return (
        <ContentPage>
            <div className={styles.title_module}><h2>Módulo 1</h2></div>
            <div className={styles.topic}>
                <p>Olá, eu sou o narrador dessa linda história que construiremos juntos, que o(a) tornará um ou uma grande expert do mundo da programação, você está preparado(a)?</p>
                <p>Antes de mergulharmos nas profundezas dos métodos de entrada e saída em Python, vamos lançar um feitiço muito útil: os comentários! Em Python, os comentários são como anotações mágicas que você adiciona ao seu código para explicar o que está acontecendo. Eles são precedidos pelo símbolo <span>#</span> e são ignorados pelo interpretador, ou seja, não afetam o funcionamento do código.</p>
                <p>Por exemplo, imagine que estamos explorando um trecho de código onde utilizamos o poderoso método <span>input()</span> para receber informações dos sábios:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[0]}
                    </code>
                </pre>
                <p>Neste caso, <span>#</span> Pedimos ao sábio o seu nome é um comentário que explica o propósito da linha seguinte. Assim, você pode deixar pistas claras para os futuros aventureiros que revisarem o seu código. Lembre-se, os comentários são uma ferramenta essencial para documentar suas descobertas e tornar sua jornada mais compreensível para outros heróis digitais!</p>
                <p>Além dos comentários, há outro conceito importante: a concatenação. Em Python, a concatenação refere-se à operação de combinar strings. Você pode realizar concatenação usando o operador <span>+</span>. Por exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[1]}
                    </code>
                </pre>
                <p>Neste exemplo, a variável <span>mensagem</span> é construída concatenando a string (coisa que veremos mais para frente) <span>"Olá, "</span>, o conteúdo da variável <span>nome</span> e a string <span>"! Bem-vindo à Terra Média!"</span>. O resultado impresso será:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[2]}
                    </code>
                </pre>
                <p>A concatenação é útil para criar mensagens personalizadas, construir URLs dinâmicas, entre outras tarefas onde é necessário combinar texto de maneira flexível. Agora que você está familiarizado com os comentários e a concatenação que usaremos bastante daqui para frente, vamos desvendar os mistérios dos métodos de entrada e saída em Python.</p>
                <hr></hr>
            </div>
            <div className={styles.topic}>
                <p>Olá, seja muito bem-vindo(a) ao mundo mágico da programação, prepare-se para descobrir os segredos dos métodos de entrada e saída usando Python, ferramentas essenciais para qualquer herói digital em sua jornada épica!</p>
                <p>Imagine que você é um mago poderoso em uma terra repleta de enigmas e desafios. Para interagir com o mundo ao seu redor, você precisa comunicar-se tanto com os sábios que lhe dão informações quanto com os livros antigos onde registra suas descobertas. Em Python, os métodos de entrada e saída são os feitiços que permitem essa comunicação.</p>
                <h1 id='MetodosDeEntrada'>Métodos de Entrada</h1>
                <p>Os métodos de entrada são como os sábios que respondem às suas perguntas. Quando você deseja obter informações do usuário ou de outra fonte, você usa um feitiço de entrada. O mais comum desses feitiços é <span>input()</span>. Com ele, você pode perguntar ao usuário por um valor ou uma instrução.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[3]}
                    </code>
                </pre>
            </div>
            <div className={styles.topic}>
                <h1 id='MetodosDeSaida'>Métodos de Saída</h1>
                <p>Os métodos de saída são como os livros antigos nos quais você registra suas descobertas para futuras gerações de heróis. O feitiço de saída mais utilizado é <span>print()</span>, que permite exibir informações na tela, compartilhando seus achados com o mundo.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[4]}
                    </code>
                </pre>
                <h2>Combinando Entrada e Saída</h2>
                <p>Em suas aventuras, você frequentemente precisa combinar esses feitiços para criar interações poderosas, como quando um mago consulta um sábio e depois anota suas novas descobertas.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[5]}
                    </code>
                </pre>
                <p>Com os métodos de entrada e saída, você pode criar diálogos ricos e registrar os feitos de sua jornada. Use esses feitiços com sabedoria, aventureiro, e você estará preparado para enfrentar qualquer desafio que o mundo da programação lhe apresentar!</p>
            </div>
            <div className={styles.topic}>
                <h1 className={styles.topic_title} id='OperadoresDeAtribuicao'>Operadores de atribuição</h1>
                <p>Agora, prepare-se para descobrir outro segredo vital: os operadores de atribuição! Eles são como os encantamentos que permitem armazenar informações mágicas em talismãs conhecidos como variáveis.</p>
                <p>Um operador de atribuição é o símbolo <span>=</span>, que você usa para colocar um valor dentro de uma variável. É como dizer ao seu talismã: "Guarde este poder para mim!"</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[6]}
                    </code>
                </pre>
            </div>
            <div className={styles.topic}>
                <h1 className={styles.topic_title} id='Variaveis'>Variáveis</h1>
                <p>As variáveis são como os talismãs em sua jornada, onde você pode guardar números, textos ou outras informações que encontrar pelo caminho. Cada talismã tem um nome único, para que você possa chamá-lo quando precisar.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[7]}
                    </code>
                </pre>
            </div>
            <div className={styles.topic}>
                <h1 className={styles.topic_title} id='Constantes'>Constantes</h1>
                <p>As constantes são como os artefatos antigos e poderosos que nunca mudam. Uma vez que você grava um valor em uma constante, ele permanece o mesmo durante toda a sua jornada. Em Python, por convenção, usamos letras maiúsculas para nomear constantes.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[8]}
                    </code>
                </pre>
                <h2>Um Exemplo Completo</h2>
                <p>Vamos ver um exemplo onde combinamos variáveis, operadores de atribuição e constantes:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[9]}
                    </code>
                </pre>
                <p>Com esses conhecimentos em mãos, você está mais preparado do que nunca para enfrentar os desafios que a programação tem a oferecer. Que sua jornada seja repleta de descobertas e conquistas épicas, bravo aventureiro!</p>
            </div>
            <div className={styles.topic}>
                <h1 className={styles.topic_title} id='TposDeDados'>Tipos de Dados</h1>
                <p>Agora, aventureiro(a), vamos explorar os diferentes tipos de dados que você encontrará em Python. Cada tipo de dado é uma ferramenta mágica com características próprias, essencial para armazenar e manipular as informações em sua jornada.</p>
                <h2>Inteiros (int)</h2>
                <p>Os inteiros são como os robustos guerreiros do reino, capazes de lidar com números sem frações. Eles são usados para representar contagens, idades, pontos de vida e qualquer valor que não necessite de um ponto decimal.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[10]}
                    </code>
                </pre>
                <h2>Flutuantes (float)</h2>
                <p>Os flutuantes são os sábios alquimistas que lidam com números fracionários e decimais. Eles são ideais para representar medições precisas, como distâncias, pesos e probabilidades.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[11]}
                    </code>
                </pre>
                <h2>Strings (str)</h2>
                <p>As strings são os bardos e contadores de histórias do reino, responsáveis por armazenar textos e caracteres. Elas são usadas para nomes, descrições e qualquer sequência de caracteres.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[12]}
                    </code>
                </pre>
                <h2>Manipulando Strings</h2>
                <h3>Fatiamento (Slicing)</h3>
                <p>Você pode obter sub-sequências de uma string ou lista usando fatiamento. A sintaxe para fatiamento é <span>sequência[inicio:fim]</span>, onde <span>inicio</span> é o índice inicial (inclusivo) e <span>fim</span> é o índice final (exclusivo).</p>
                <p>Exemplo com Strings:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[13]}
                    </code>
                </pre>
                <p>Métodos úteis para strings:</p>
                <p><span>upper()</span>: Converte todos os caracteres para maiúsculas.</p>
                <p><span>lower()</span>: Converte todos os caracteres para minúsculas.</p>
                <p><span>split()</span>: Divide a string em uma lista de substrings.</p>
                <p><span>join()</span>: Junta uma lista de strings em uma única string.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[14]}
                    </code>
                </pre>
                <h2>Booleanos (bool)</h2>
                <p>Os booleanos são os guardiões do verdadeiro e do falso, representando apenas dois estados: verdadeiro (<span>True</span>) e falso (<span>False</span>). Eles são usados para decisões lógicas, como verificar condições e controlar o fluxo da sua história.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[15]}
                    </code>
                </pre>
                <h3>Exemplo completo: </h3>
                <p>Vamos ver um exemplo onde combinamos esses diferentes tipos de dados:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[16]}
                    </code>
                </pre>
                <p>Com esses tipos de dados à sua disposição, você está ainda mais preparado para manipular as informações e enfrentar os desafios que surgirem em sua jornada. Boa sorte, herói, e que sua aventura seja repleta de descobertas e vitórias!</p>
            <div className={styles.topic}>
                <h1 className={styles.topic_title} id='OperadoresAritmeticos'>Operadores aritméticos</h1>
                <p>Bravo(a) aventureiro(a), agora que você conhece os tipos de dados fundamentais, é hora de descobrir os operadores aritméticos em Python, as ferramentas mágicas que permitem realizar cálculos e manipular números. Esses operadores são essenciais para qualquer mago da programação, pois com eles, você poderá somar, subtrair, multiplicar e muito mais.</p>
                <h2>Adição (<span>+</span>)</h2>
                <p>A adição é o encantamento que permite somar dois valores. Use-o para acumular tesouros ou calcular a soma de forças.</p>
                <p>Exemplo: </p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[17]}
                    </code>
                </pre>
                <h2>Subtração (<span>-</span>)</h2>
                <p>A subtração é o feitiço para subtrair um valor de outro. Perfeito para calcular perdas ou diminuir pontos de vida após uma batalha.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[18]}
                    </code>
                </pre>
                <h2>Multiplicação (<span>*</span>)</h2>
                <p>A multiplicação multiplica dois valores. Ideal para aumentar sua força com poções mágicas ou calcular áreas de territórios conquistados.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[19]}
                    </code>
                </pre>
                <h2>Divisão (<span>/</span>)</h2>
                <p>A divisão divide um valor por outro. Útil para dividir tesouros entre companheiros ou calcular a quantidade de poções usadas.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[20]}
                    </code>
                </pre>
                <h2>Divisão Inteira (<span>//</span>)</h2>
                <p>A divisão inteira é como a divisão, mas retorna apenas a parte inteira do resultado, descartando qualquer fração. Ideal para calcular quantas vezes um recurso pode ser usado completamente.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[21]}
                    </code>
                </pre>
                <h2>Módulo (<span>%</span>)</h2>
                <p>O módulo retorna o resto de uma divisão. É como descobrir quantas moedas sobraram após comprar espadas.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[22]}
                    </code>
                </pre>
                <h2>Exponenciação (<span>**</span>)</h2>
                <p>A exponenciação eleva um número a uma potência. Use-o para calcular o poder aumentado de um feitiço ou a área de um quadrado mágico.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[23]}
                    </code>
                </pre>
                <h3>Exemplo Completo</h3>
                <p>Vamos ver um exemplo onde combinamos esses operadores aritméticos em uma pequena história:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExample[24]}
                    </code>
                </pre>
                <p>Com esses operadores aritméticos, você poderá calcular e manipular números com maestria, tornando-se um mago ainda mais poderoso em suas aventuras pelo mundo da programação. Boa sorte, herói, e que suas habilidades matemáticas sempre o guiem ao sucesso!</p>
            </div>
            </div>
        </ContentPage>
    );
}

export default Modulo1;