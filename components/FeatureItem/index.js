import React from 'react';
import styles from './style.module.scss';

const FeatureItem = ({ children, ...props }) => {
    return (
        <li className={styles.featureItem}
            {...props}
        >
            {children}
        </li>
    );
};

export default FeatureItem;
