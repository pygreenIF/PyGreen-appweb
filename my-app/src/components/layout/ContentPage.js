import styles from './ContentPage.module.css';

function ContentPage(props) {
    return(
        <div className={`${styles.content_page} ${styles[props.customClass]}`}>
            <div className={styles.container_content}>
                {props.children}
            </div>
        </div>
    );
}

export default ContentPage;