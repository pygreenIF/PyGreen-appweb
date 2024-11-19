import React, { useState } from 'react';
import styles from './Module.module.css';
import { TbTriangleFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import Content from '../layout/Content';

function Module({ num_module, title, contents = [], link }) {
    const [expanded, setExpanded] = useState(false);

    const handleContainerClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`${styles.container} ${expanded ? styles.expanded : ''}`} onClick={handleContainerClick}>
            <h1>Módulo - <span>{num_module}</span> {title}</h1>
            <span className={`${styles.arrow} ${expanded ? styles.rotated : ''}`}><TbTriangleFilled /></span>
            <Content>
                {contents.map((item, index) => (
                    <Link to={`/modulos/${link}`} className={styles.links} key={index}>
                        <div className={`${styles.titles} ${expanded ? styles.appear : ''}`}>
                            <p>{item}</p>
                        </div>
                    </Link>
                ))}
            </Content>
        </div>
    );
}

export default Module;
