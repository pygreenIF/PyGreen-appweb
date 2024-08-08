import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/LogoPygreen.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div>
                    <Link to='/'><img className={styles.logoPygreen} src={logo} alt='PyGreen'></img></Link>
                    <Link to='/'><h1>PyGreen</h1></Link>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/trailer'>Trailer</Link></li>
                    <li className={styles.item}><Link to='/modulos'>Módulos</Link></li>
                    <li className={styles.item}><Link to='/sobre'>Sobre</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar