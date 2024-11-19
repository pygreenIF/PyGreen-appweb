import React from 'react'
import styles from './Home.module.css'
import imageBackground from '../../img/game-images/game2.jpeg'
import paisonCodeLogo from '../../img/game-images/paisonCodeLogo.png'

function Home() {
    return (
        <section className={styles.homepage}>
            <div className={styles.backgroundOverlay}>
                <img src={imageBackground} className={styles.backgroundImage} alt="Background" />
            </div>
            <img src={paisonCodeLogo} className={styles.logo} alt="Paison Code Logo" />
            <div className={styles.title}>
                <h1>SEJA BEM-VINDO</h1>
            </div>
            <div className={styles.text}>
                <p>Neste mundo incrível de aventura e educação, evolua suas habilidades em programação com Python, encare grandes desafios e se torne o Dev Mestre que tem dentro de você.</p>
            </div>
            <a href='/modulos'>ENTRAR AGORA</a>
        </section>
    )
}

export default Home;