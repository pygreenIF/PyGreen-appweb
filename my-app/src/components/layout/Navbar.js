import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/LogoPygreen.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        alert("Você foi desconectado");
        window.location.href = "/auth";
    };

    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.logoContainer}>
                    <NavLink to='/'><img className={styles.logoPygreen} src={logo} alt='PyGreen' /></NavLink>
                    <NavLink to='/'><h1>PyGreen</h1></NavLink>
                </div>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} color="#FFF" /> : <FaBars size={24} color="#FFF" />}
                </div>
                <ul className={`${styles.list} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li className={styles.item}>
                        <NavLink onClick={toggleMenu} to='/' style={({ isActive }) => ({ color: isActive ? '#51BA4F' : '#FFF' })}>Home</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink onClick={toggleMenu} to='/trailer' style={({ isActive }) => ({ color: isActive ? '#51BA4F' : '#FFF' })}>Trailer</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink onClick={toggleMenu} to='/modulos' style={({ isActive }) => ({ color: isActive ? '#51BA4F' : '#FFF' })}>Módulos</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink onClick={toggleMenu} to='/sobre' style={({ isActive }) => ({ color: isActive ? '#51BA4F' : '#FFF' })}>Sobre</NavLink>
                    </li>
                    <li className={`${styles.item} ${styles.authButton}`}>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className={styles.logoutButton}>Deslogar</button>
                        ) : (
                            <NavLink onClick={toggleMenu} to='/auth' style={({ isActive }) => ({ color: isActive ? '#FFF' : '#51BA4F' })}>
                                Entrar/Cadastrar
                            </NavLink>
                        )}
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;
