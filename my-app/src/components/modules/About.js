import styles from './About.module.css'
import Container from '../layout/Container'
import React from 'react'
import fotoEmilly from '../../img/about-photos/emilly2.jpeg'
import fotoPedro from '../../img/about-photos/pedroPegado.jpeg'
import fotoYuji from '../../img/about-photos/yuji.jpeg'
import fotoLeon from '../../img/about-photos/leon2.jpeg'

function About() {
    return (
        <Container>
            <section className={styles.aboutUs}>
                <h1>Sobre os criadores <span>.</span></h1>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutCard}>
                        <img src={fotoEmilly} alt="Emilly Estefanny" />
                        <h1>EMILLY ESTEFANNY</h1>
                        <p>Eai pessoal, me chamo Emilly Estefanny. Sou aluna do Instituto Federal do Rio Grande do Norte do campus Ceará-Mirim, entrei no IFRN no ano de 2021 e agora no ano de 2023 estou cursando o terceiro período do curso de informática.</p>
                    </div>
                    <div className={styles.aboutCard}>
                        <img src={fotoYuji} alt="Gabriel Yuji" />
                        <h1>GABRIEL YUJI</h1>
                        <p>Opa pessoal, meu nome é Yuji, gosto de desenhar, jogar videogames, e tento programar alguma coisa de jogos.</p>
                        
                    </div>
                    <div className={styles.aboutCard}>
                        <img src={fotoLeon} alt="Leon Sedov" />
                        <h1>LEON SEDOV</h1>
                        <p>Hello world, Sou Leon sedov, programador e estudo informática aqui no IFCM. Espero que gostem de tudo.</p>
                        
                    </div>
                    <div className={styles.aboutCard}>
                        <img src={fotoPedro} alt="Pedro Pegado" />
                        <h1>PEDRO PEGADO</h1>
                        <p>Oioi, sou o Pedro e sou estudante de informática do IFRN, campus Ceará-Mirim, sou fã de dublagem e jogos competitivos, e participei do desenvolvimento do site Pygreen.</p>
                        
                    </div>
                </div>
            </section>
            <section className={styles.aboutProject}>
                <h1>Sobre o projeto <span>.</span></h1>
                <div className={styles.textProject}>
                    <p>O Projeto PyGreen nasceu da vontade de proporcionar aos jovens de escolas públicas uma chance de aprender programação. Ao perceber a falta de acesso a esses conhecimentos em algumas comunidades, decidimos criar uma iniciativa aberta a todos, independentemente de onde vivem ou de seus recursos financeiros.</p>
                    <p>A essência do nosso projeto é a certeza de que a programação vai além dos computadores, sendo uma ferramenta para desbloquear oportunidades e desenvolver habilidades de resolução de problemas e criatividade. No centro do nosso esforço está tornar o aprendizado de programação envolvente e acessível. O "Paison Code", um jogo desenvolvido como parte do projeto, visa tornar essa jornada de aprendizagem uma experiência atraente e estimulante.</p>
                    <p>Em resumo, o Projeto PyGreen surge da ideia central de que todos merecem a chance de aprender a programar. Buscamos capacitar jovens para se tornarem proficientes em tecnologia e enfrentarem os desafios do mundo contemporâneo.</p>
                </div>
            </section>
        </Container>
    );
}

export default About;
