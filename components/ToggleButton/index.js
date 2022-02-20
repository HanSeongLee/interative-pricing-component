import React from "react";
import styles from './style.module.scss';

const ToggleButton = ({ name, ...props }) => {
    return (
        <input className={styles.toggleButton}
               type={'checkbox'}
               aria-label={name}
               {...props}
        />
    );
};

export default ToggleButton;
