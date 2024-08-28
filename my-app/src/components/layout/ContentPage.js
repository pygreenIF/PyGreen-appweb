import styles from './ContentPage.module.css';

function ContentPage({ titles = [], subtitles = [], num_subtitles = [], customClass, children }) {
    let start = 0;

    return (
        <section className={styles.contents}>
            <div className={styles.content_aside_nav}>
                <div className={styles.navigation}>
                    {titles.map((title, i) => {
                        const end = start + num_subtitles[i];
                        const relatedSubtitles = subtitles.slice(start, end);
                        start = end;

                        return (
                            <div key={i} className={styles.navigation_section}>
                                <h3>{title}</h3>
                                <ul>
                                    {relatedSubtitles.map((subtitle, j) => (
                                        <li key={j}>{subtitle}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={`${styles.content_page} ${styles[customClass]}`}>
                <div className={styles.container_content}>
                    {children}
                </div>
            </div>
        </section>
    );
}


export default ContentPage;