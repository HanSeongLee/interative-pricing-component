import React from "react";
import styles from './style.module.scss';

const ToggleButton = ({ ...props }) => {
    return (
        <input className={styles.toggleButton}
               type={'checkbox'}
               {...props}
        />
    );
};

export default ToggleButton;
