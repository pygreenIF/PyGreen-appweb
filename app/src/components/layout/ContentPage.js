import { useState } from 'react';
import { FaChevronRight, FaChevronDown, FaChevronLeft } from 'react-icons/fa'; 
import styles from './ContentPage.module.css';

function ContentPage({ titles = [], subtitles = [], num_subtitles = [], customClass, children }) {
    const [expandedTitleIndex, setExpandedTitleIndex] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); 
    let start = 0;

    const toggleSubtitles = (index) => {
        setExpandedTitleIndex(expandedTitleIndex === index ? null : index);
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible); 
    };

    return (
        <section className={styles.contents}>
            <div className={`${styles.content_aside_nav} ${isSidebarVisible ? '' : styles.collapsed}`}>
                <div className={styles.navigation}>
                    {titles.map((title, i) => {
                        const end = start + num_subtitles[i];
                        const relatedSubtitles = subtitles.slice(start, end);
                        start = end;

                        const hasSubtitles = relatedSubtitles.length > 0;
                        const isExpanded = expandedTitleIndex === i;

                        return (
                            <div
                                key={i}
                                className={`${styles.navigation_section} ${isExpanded ? styles.expanded : ''}`}
                            >
                                <a href={`#${title}`} onClick={() => toggleSubtitles(i)} className={styles.title_link}>
                                    <h3>{title}</h3>
                                    {hasSubtitles && (
                                        <span className={styles.chevron}>
                                            {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                                        </span>
                                    )}
                                </a>

                                {isExpanded && (
                                    <ul>
                                        {relatedSubtitles.map((subtitle, j) => (
                                            <li key={j}>
                                                <a href={`#${subtitle}`}>{subtitle}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
                <button onClick={toggleSidebar} className={styles.toggle_button}>
                    {isSidebarVisible ? <FaChevronLeft /> : <FaChevronRight />}
                </button>
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
