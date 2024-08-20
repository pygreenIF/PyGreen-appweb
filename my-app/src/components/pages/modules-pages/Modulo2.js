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

    let codeExamples = [
        // Condição if
        `# Define a variável 'tesouro' como True (verdadeiro)
tesouro = True

# Verificando se 'tesouro' é True
if tesouro: 
    print("Você encontrou um tesouro!") # Imprime a mensagem se 'tesouro' for True`,

// Condição elif
`# Define a variável 'dia' como "segunda-feira"
dia = "segunda-feira"

# Verifica se 'dia' é "segunda-feira"
if dia == "segunda-feira":
    # Imprime a mensagem se 'dia' for "segunda-feira"
    print("Hoje é dia de explorar a floresta.")
# Imprime a mensagem se 'dia' for "terça-feira"
elif dia == "terça-feira":
    print("Hoje é dia de atravessar a ponte.")`,

// Condição else
`# Define a variável 'tempo' como "chuva"
tempo = "chuva"

# Verifica se 'tempo' é "sol"
if tempo == "sol":
    # Se 'tempo' for "sol", imprime a mensagem para sair para uma aventura
    print("Vamos sair para uma aventura!")
# Caso contrário (se 'tempo' não for "sol")
else:
    # Imprime a mensagem para ficar no acampamento e planejar
    print("Vamos ficar no acampamento e planejar.")`,

// Condições e operadores de comparação
`moeda_de_ouro = 10
poção = True

# Verifica se o aventureiro tem moedas suficientes para comprar uma espada
if moeda_de_ouro >= 5:
    print("Você comprou uma espada!")
else:
    print("Você não tem moedas suficientes para comprar uma espada.")

# Verifica se o aventureiro tem uma poção
if poção:
    print("Você está pronto para enfrentar o dragão com sua poção!")
else:
    print("É melhor encontrar uma poção antes de enfrentar o dragão.")

# Verifica a condição do tempo para decidir a atividade do dia
tempo = "nublado"

if tempo == "sol":
    print("Vamos sair para uma grande aventura!")
elif tempo == "chuva":
    print("Vamos ficar no acampamento e treinar.")
else:
    print("Vamos explorar a caverna próxima.")`,

`> Você comprou uma espada!
> Você está pronto para enfrentar o dragão com sua poção!
> Vamos explorar a caverna próxima.`,

// Operadores lógicos
`# Condições da aventura
tocha_acesa = True # A tocha está acesa
monstro = False # Não há monstros na floresta

# Verificando se podemos prosseguir
if tocha_acesa and not monstro: # Se a tocha estiver acesa e não houver monstros
    print("Você pode prosseguir com segurança pela floresta!") # Imprime mensagem de segurança
else:
    print("É perigoso prosseguir, acenda sua tocha e esteja preparado para enfrentar monstros!") # Imprime mensagem de perigo`,

// Laço de repetição 'for'
`lugares = ["floresta", "caverna", "montanha", "rio"]  # Lista de lugares com as poções
for lugar in lugares:  # Laço 'for' para visitar cada lugar
    print(f"Coletando poção na {lugar}")`,

// Iterações
`# A primeira iteração visita a "floresta" e coleta a poção.
# A segunda iteração visita a "caverna" e coleta a poção.
# A terceira iteração visita a "montanha" e coleta a poção.
# A quarta iteração visita o "rio" e coleta a poção.`,

// Early Exit com break
`salas = ["sala1", "sala2", "sala3", "sala_com_tesouro", "sala4"]
for sala in salas:
    if sala == "sala_com_tesouro":
        print("Tesouro encontrado na", sala, "! Saindo do calabouço.")
        break  # Sai do laço assim que o tesouro é encontrado
    print("Explorando", sala)`,

// Early Exit com continue
`areas = ["área1", "área_perigosa", "área2", "área_perigosa", "área3"]
for area in areas:
    if area == "área_perigosa":
        print("Área perigosa encontrada em", area, ". Pulando essa área.")
        continue  # Pula o restante do código e vai para a próxima iteração
    print("Coletando ervas na", area)`,

// Laço de repetição while
`energia = 10  # Nível de energia inicial
while energia > 0:  # Continua enquanto tiver energia
    print("Fazendo uma flexão!")
    energia -= 1  # Usar energia para fazer uma flexão
    print("Energia restante:", energia)

print("Exausto! Não pode mais fazer flexões.")`,

// Contador
`energia = 10
flexoes = 0  # Contador de flexões
while energia > 0:
    print("Fazendo uma flexão!")
    energia -= 1
    flexoes += 1  # Incrementa o contador de flexões
    print("Energia restante:", energia)
print("Exausto! Você fez", flexoes, "flexões.")`,

// Acumulador
`energia = 10
flexoes = 0
moedas = 0  # Acumulador de moedas

while energia > 0:
    print("Fazendo uma flexão!")
    energia -= 1
    flexoes += 1
    moedas += 2  # Coleta 2 moedas a cada flexão
    print("Energia restante:", energia)
    print("Moedas coletadas até agora:", moedas)
print("Exausto! Você fez", flexoes, "flexões e coletou um total de", moedas, "moedas.")`
      ];
      

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
                        {codeExamples[0]}
                    </code>
                </pre>

                <h2>A condição elif</h2>
                <p>O elif (abreviação de "else if") é usado quando você tem várias condições para verificar. Pense nele como outros guardiões ao longo do caminho, cada um verificando uma condição diferente:</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[1]}
                    </code>
                </pre>

                <h2>A condição else</h2>
                <p>O else é como um guardião final que direciona você se nenhuma das condições anteriores for atendida:</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[2]}
                    </code>
                </pre>
            </div>
            <div className={styles.topic}>
                <h1 id='OperadoresDeComparacao'>Operadores de Comparação</h1>
                <p>Para tomar decisões, você precisa comparar valores. Aqui estão alguns operadores de comparação, que são como bússolas mágicas, ajudando a determinar a direção certa:</p>
                <ul>
                    <li>Igual a (<span>==</span>): Verifica se dois valores são iguais.</li>
                    <li>Diferente de (<span>!=</span>): Verifica se dois valores são diferentes.</li>
                    <li>Maior que (<span>&gt;</span>): Verifica se um valor é maior que outro.</li>
                    <li>Menor que (<span>&lt;</span>): Verifica se um valor é menor que outro.</li>
                    <li>Maior ou igual a (<span>&gt;=</span>): Verifica se um valor é maior ou igual a outro.</li>
                    <li>Menor ou igual a (<span>&lt;=</span>): Verifica se um valor é menor ou igual a outro.</li>
                </ul>
                <p>Vamos juntar tudo isso em um exemplo que usa condições e operadores de comparação:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[3]}
                    </code>
                </pre>
                <p>Saída do Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[4]}
                    </code>
                </pre>
                <p>Com o conhecimento sobre condições <span>if</span>, <span>elif</span> e <span>else</span>, e os operadores de comparação, você agora tem a capacidade de tomar decisões inteligentes em suas aventuras de programação. </p>
            </div>
            <div className={styles.topic}>
                <h1 id='OperadoresLogicos'>Operadores Lógicos</h1>
                <p>Os operadores lógicos são como as ferramentas que usamos para fazer perguntas e tomar decisões quando estamos programando. Existem três principais: "<span>and</span>", "<span>or</span>" e "<span>not</span>".</p>
                <ul>
                    <li>"<span>and</span>" é usado quando queremos que duas condições sejam verdadeiras para algo acontecer. Por exemplo, você só pode abrir o portão mágico se tiver a chave <span>e</span> souber a senha secreta.</li>
                    <li>"<span>or</span>" é usado quando apenas uma das condições precisa ser verdadeira para algo acontecer. Por exemplo, você pode escolher entre enfrentar o dragão <span>ou</span> atravessar o rio encantado para chegar ao castelo.</li>
                    <li>"<span>not</span>" é usado para inverter o valor de uma condição. Se queremos verificar se algo não é verdadeiro, usamos "not". Por exemplo, se um guardião disser que você não pode passar, você pode usar a magia "<span>not</span>" para convencê-lo do contrário.</li>
                </ul>
                <h2>Tabela Verdade</h2>
                <p>A tabela verdade é como um mapa mágico que mostra todas as combinações possíveis de decisões que você pode tomar e os resultados delas. Por exemplo, se usarmos "and" para combinar duas ações, podemos criar uma tabela para ver o que acontece:</p>
                <div className={styles.tableContainer}>
                    <table className={styles.tableBordered}>
                        <tr className={styles.tableHeader}>
                            <th>A</th>
                            <th>B</th>
                            <th>A and B</th>
                        </tr>
                        <tr>
                            <td>True</td>
                            <td>True</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td>True</td>
                            <td>False</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>False</td>
                            <td>True</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>False</td>
                            <td>False</td>
                            <td>False</td>
                        </tr>
                    </table>
                </div>
                <p>Nesta tabela, "A" e "B" representam duas ações que você pode tomar, e "A and B" mostra o resultado quando você combina essas ações usando "and".</p>
                <p>Exemplo de código:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[5]}
                    </code>
                </pre>
                <p>Assim como você usa seu conhecimento para tomar as melhores decisões durante sua jornada, na programação, usamos a tabela verdade para entender como os operadores lógicos funcionam em diferentes situações.</p>
            </div>
            <div className={styles.topic}>
                <h1 id='LacoDeRepeticao'>Laços de Repetição</h1>
                <p>Um laço de repetição é como uma missão que você faz várias vezes. Imagine que você é um herói em uma jornada e precisa coletar 10 poções mágicas que estão espalhadas pelo reino. Em vez de coletar uma poção e voltar para casa cada vez, você decide usar um laço de repetição para pegar todas de uma só vez. O laço continua até que todas as poções sejam coletadas.</p>

                <h2>Laço de repetição for</h2>
                <p>Vamos dizer que você tem uma lista de lugares onde estão escondidas as poções: floresta, caverna, montanha, rio, etc. Você usa um laço 'for' para visitar cada um desses lugares e coletar as poções.</p>
                <p>Aqui está como seria o código em Python:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[6]}
                    </code>
                </pre>
                <p>Neste exemplo:</p>
                <ul>
                    <li>‘<span>lugares</span>’ é uma lista de lugares.</li>
                    <li>O laço '<span>for</span>' percorre cada lugar na lista e imprime uma mensagem dizendo que você está coletando uma poção lá.</li>
                </ul>
                <h3>Iterações</h3>
                <p>Iterações são como os passos que você dá em cada lugar para coletar as poções. Cada vez que o laço '<span>for</span>' visita um lugar e executa a ação de coletar a poção, isso é uma iteração. Então, se você tem 4 lugares na lista, haverá 4 iterações.</p>
                <p>Em outras palavras:</p>
                <ul>
                    <li>A primeira iteração visita a "floresta" e coleta a poção.</li>
                    <li>A segunda iteração visita a "caverna" e coleta a poção.</li>
                    <li>A terceira iteração visita a "montanha" e coleta a poção.</li>
                    <li>A quarta iteração visita o "rio" e coleta a poção.</li>
                </ul>
                <p>Cada vez que o laço 'for' executa a ação de visitar um lugar e coletar uma poção, isso é uma iteração.</p>

                <h2>Laço de repetição while</h2>
                <p>Imagine que você é um herói que precisa treinar para se tornar mais forte. Você decide fazer flexões até ficar exausto. Você continuará fazendo flexões enquanto ainda tiver energia.</p>
                <p>Em programação, o laço while funciona da mesma forma: ele continua repetindo um bloco de código enquanto uma condição for verdadeira.</p>
                <p>Exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[10]}
                    </code>
                </pre>
                <p>Neste exemplo:</p>
                <ul>
                    <li>“<span>energia</span>” começa com 10.</li>
                    <li>O laço <span>while</span> continua enquanto “<span>energia</span>” for maior que 0.</li>
                    <li>A cada iteração, o herói faz uma flexão, queima energia, e o programa imprime a energia restante.</li>
                    <li>Quando a energia chega a 0, o laço para e o herói está exausto.</li>
                </ul>
                <h3>Contadores</h3>
                <p>Um contador é como um diário que registra quantas flexões você fez. Ele aumenta de valor cada vez que você faz uma flexão.</p>
                <p>Exemplo com Contador:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[11]}
                    </code>
                </pre>
                <p>Neste exemplo:</p>
                <ul>
                    <li>“<span>flexoes</span>” é o contador que começa em 0.</li>
                    <li>A cada iteração, o contador “<span>flexoes</span>” aumenta em 1.</li>
                    <li>Quando o herói está exausto, o programa imprime o total de flexões feitas.</li>
                </ul>
                <h3>Acumuladores</h3>
                <p>Um acumulador é como uma sacola em que você guarda moedas que encontra durante uma jornada. Cada vez que você encontra uma moeda, você a coloca na sacola.</p>
                <p>Exemplo com Acumulador:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[12]}
                    </code>
                </pre>
                <p>Neste exemplo:</p>
                <ul>
                    <li>“<span>moedas</span>” é o acumulador que começa em 0.</li>
                    <li>A cada iteração, o herói coleta 2 moedas e as adiciona ao acumulador “<span>moedas</span>”.</li>
                    <li>Quando o herói está exausto, o programa imprime o total de flexões feitas e o total de moedas coletadas.</li>
                </ul>
                <p>Resumo</p>
                <ul>
                    <li><span>while</span>: Continua repetindo um bloco de código enquanto a condição for verdadeira.</li>
                    <li>Contadores: Variáveis que aumentam de valor a cada iteração (ex: <span>flexoes</span>).</li>
                    <li>Acumuladores: Variáveis que somam valores ao longo das iterações (ex: <span>moedas</span>).</li>
                </ul>
            </div>
            <div className={styles.topic}>
                <h1>Early Exit com break</h1>
                <p>Imagine que você é um herói explorando um calabouço em busca de um tesouro. O calabouço tem várias salas, e você precisa procurar o tesouro em cada sala. No entanto, assim que você encontra o tesouro, não precisa continuar explorando o restante das salas. Você pode sair do calabouço imediatamente. O comando <span>break</span> em programação é como essa decisão de sair do calabouço assim que o tesouro é encontrado.</p>
                <p>Vamos ver um exemplo para compreender melhor:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[8]}
                    </code>
                </pre>
                <p>Neste exemplo:</p>
                <ul>
                    <li>Temos uma lista de salas.</li>
                    <li>O laço “<span>for</span>” percorre cada sala.</li>
                    <li>Se encontrar a “<span>sala_com_tesouro</span>”, imprime uma mensagem e usa <span>break</span> para sair do laço, parando a exploração.</li>
                </ul>
                <h1>Early Exit com continue</h1>
                <p>Agora, imagine que você está em uma missão para coletar ervas mágicas em uma floresta, mas algumas áreas da floresta são perigosas e você deve evitá-las. Se você chegar a uma área perigosa, deve pular essa área e continuar a busca nas outras áreas seguras. O comando continue em programação permite que você pule o restante da iteração atual e passe para a próxima.</p>
                <p>Vamos ver um exemplo:</p>
                <pre className={styles.codeblock}>
                    <code className="language-python">
                        {codeExamples[9]}
                    </code>
                </pre>
                <p>Neste exemplo:</p>
                <ul>
                    <li>Temos uma lista de áreas.</li>
                    <li>O laço “<span>for</span>” percorre cada área.</li>
                    <li>Se encontrar uma "<span>área_perigosa</span>", imprime uma mensagem e usa <span>continue</span> para pular o restante do código nessa iteração e continuar com a próxima área segura.</li>
                </ul>
                <p>Resumo:</p>
                <ul>
                    <li><span>break</span>: Sai do laço imediatamente, como um herói saindo do calabouço assim que encontra o tesouro.</li>
                    <li><span>continue</span>: Pula a iteração atual e passa para a próxima, como um herói evitando áreas perigosas na floresta enquanto coleta ervas.</li>
                </ul>
            </div>
        </ContentPage>
    )
}

export default Modulo2;