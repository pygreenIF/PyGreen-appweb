import styles from './Content.module.css'

function Content(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Content