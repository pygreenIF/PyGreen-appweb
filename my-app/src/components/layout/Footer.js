import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p className={styles.copy_right}> &copy; 2023 <span>PyGreen</span></p>
            </div>
        </footer>
    )
}

export default Footer